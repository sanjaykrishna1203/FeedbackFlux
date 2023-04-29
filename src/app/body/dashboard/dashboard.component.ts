import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private functions: AngularFireFunctions, public formService: FormService) { }

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';
  selectedFormIndex:number = 0;
  selectedQuestionIndex:number = 0;
  ratingAverage:number = 0;
  view: number[] = [500, 400];
  // single =[
  //   {
  //     "name": "Germany",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "USA",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "France",
  //     "value": 7200000
  //   },
  //     {
  //     "name": "UK",
  //     "value": 6200000
  //   }
  // ];
  ngOnInit(): void {
    this.formService.getUserForms();
  }

  updateSelectedForm() {
    console.log(this.formService.userForms[this.selectedFormIndex].Id);
    this.formService.selectedFormId = this.formService.userForms[this.selectedFormIndex].Id;
    this.formService.getFormResponses(this.formService.selectedFormId);
  }


  optionChange(i: any)
  {
    console.log(i);
    
  }

  changeQuestionIndex(i:number)
  {
    this.selectedQuestionIndex = i;
    if(i % 2 == 1) this.isDoughnut = true;
    else this.isDoughnut = false;
    if(this.formService.userForms[this.selectedFormIndex].Fields[this.selectedQuestionIndex].type == 'Rating')
    {
      var total = 0;
      var count = 0;
      console.log(this.formService.dashboardData[this.selectedQuestionIndex])
      this.formService.dashboardData[this.selectedQuestionIndex].forEach((element: { name: any; value: number; }) => {
        total+= (element.name[0] * element.value);
        count+= element.value;
      });
      this.ratingAverage = total / count;
      console.log(this.ratingAverage)
    }
  }

}
