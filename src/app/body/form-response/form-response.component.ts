import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-response',
  templateUrl: './form-response.component.html',
  styleUrls: ['./form-response.component.css']
})
export class FormResponseComponent implements OnInit{
  p: number = 1;
  id:string = '';
  objectKeys = Object.keys;
  constructor(private route:ActivatedRoute, public formService:FormService) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.formService.getFormResponses(id);
      this.p = 1;
      console.log( this.formService.formResponses[0].Fields);
  }

  log(){
    console.log(this.formService.responseArray)
  }

  getNum(n: string)
  {
    return parseInt(n);
  }

  activateIndividual(){
    this.p = 1;
  }


}
