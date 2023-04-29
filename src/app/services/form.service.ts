import { Injectable } from '@angular/core';
import { CustomForm } from '../interfaces/CustomForm';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { colorSets } from '@swimlane/ngx-charts';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  form:CustomForm = {
    Id: '',
    Title: '',
    CreatedAt:'',
    Fields: []
  };
  single:any ={'name': '', 'value': ''}
  dashboardData:any = [];
  sentimentData:any = [];
  responseArray:any[][] = [];
  userForms:CustomForm[] = [];
  formResponses:CustomForm[] = [];
  selectedFormId: any;
  responseReady:boolean = false;
  constructor(private functions:AngularFireFunctions, private authService:AuthService, private router:Router) { }

  saveForm(){
    console.log(this.authService.userData)
    const callable = this.functions.httpsCallable("forms/addForm");
    callable({Uid: this.authService.userData.uid, Fields:this.form.Fields, Title: this.form.Title }).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['form-landing', data]);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{console.log("Complete");
      }
    })
  }

  saveResponse(){
    console.log("hi");
    const callable = this.functions.httpsCallable("forms/addResponse");
    callable({Id: this.form.Id, Fields:this.form.Fields, Title: this.form.Title }).subscribe({
      next:(data)=>{
        console.log(data);
        // this.router.navigate(['form-landing', data]);
        alert("Response Submitted Successfully");
        this.router.navigate(['']);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{console.log("Complete");
      }
    })
  }

  getForm(id: any) {
    const callable = this.functions.httpsCallable("forms/getForm");
    callable({Id: id}).pipe(
      map(actions => {
        this.form = actions.resultData as CustomForm
        return actions.resultData as CustomForm;
    }))
    .subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Completem getting form data");
        
      }
    })
  }

  getUserForms()
  {
    console.log(this.authService.userData)
    const callable = this.functions.httpsCallable("forms/getUserForms");
    callable({Uid:this.authService.userData.uid}).pipe(
      map(actions=>{
        this.userForms = actions.resultData as CustomForm[];
        return actions.resultData as CustomForm[];
      })).subscribe({
      next:(data)=>{
        console.log(data);
        this.selectedFormId = data[0].Id;
        this.getFormResponses(data[0].Id);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Complete getting user forms");
        
      }
    })
  }

  getFormResponses(id: any)
  {
    this.responseReady = false;
    this.formResponses = [];
    const callable = this.functions.httpsCallable("forms/getFormResponses");
    callable({Uid:this.authService.userData.uid, Id:id}).pipe(
      map(actions=>{
        this.formResponses = actions.resultData as CustomForm[];
        return actions.resultData as CustomForm[];
      })).subscribe({
      next:(data)=>{
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Complete getting Form Responses");
        this.responseReady = true;
        this.getQuestionWiseData();
      }
    })
  }

  getQuestionWiseData(){
    this.responseArray = [];
    this.sentimentData = [];
    console.log(this.formResponses);
    const fieldLen = this.formResponses[0].Fields.length;
    const resLen = this.formResponses.length;
    for(let i = 0;i<fieldLen;i++)
    {
      const arr:any = [];
      const sentiArray:any = [];
      for(let j = 0; j< resLen; j++)
      {
        if(this.formResponses[j].Fields[i].type == 'Open')
        {
          arr.push(this.formResponses[j].Fields[i].response);
          const senti:any = this.formResponses[j].Fields[i].Sentiment;
          if(sentiArray[senti] == undefined) sentiArray[senti] = 0;
          sentiArray[senti] +=1;

        }
        if(this.formResponses[j].Fields[i].type == 'Multiple' || this.formResponses[j].Fields[i].type == 'Rating')
        {
          if(arr[this.formResponses[j].Fields[i].response] == undefined) arr[this.formResponses[j].Fields[i].response] = 0;
          arr[this.formResponses[j].Fields[i].response] +=1;
        }
      }
      this.responseArray.push(arr);
      console.log(sentiArray, i);
      this.sentimentData.push(sentiArray);
    }
    console.log("senti array ",this.sentimentData);
    
    this.getDashboardData();
  }

  getDashboardData(){
    this.dashboardData = [];
    for(let i = 0; i< this.responseArray.length; i++)
    {
      const arr = [];
      if(this.formResponses[0].Fields[i].type == 'Open')
      {
        const keys:any = Object.keys(this.sentimentData[i]);
        console.log("keys", keys);
        for(let j = 0; j<keys.length; j++)
        {
          let x:any = {'name': '', 'value': 0};
          x.name = keys[j];
          x.value = parseInt(this.sentimentData[i][keys[j]]);
          arr.push(x);
        }
      }
      else if(this.formResponses[0].Fields[i].type == 'Multiple')
      {
        const keys:any = Object.keys(this.responseArray[i]);
        for(let j = 0; j<keys.length; j++)
        {
          let x:any = {'name': '', 'value': 0};
          x.name = keys[j];
          x.value = parseInt(this.responseArray[i][keys[j]]);
          arr.push(x);
        }
      } else if(this.formResponses[0].Fields[i].type == 'Rating')
      {
        const keys:any = Object.keys(this.responseArray[i]);
        for(let j = 0; j<keys.length; j++)
        {
          let x:any = {'name': '', 'value': 0};
          x.name = keys[j] + ' Stars';
          x.value = parseInt(this.responseArray[i][keys[j]]);
          arr.push(x);
        }
      }
      this.dashboardData.push(arr);
    }
    console.log(this.dashboardData);
    
  }
}
