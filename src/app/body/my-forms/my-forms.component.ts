import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit{
  url:string = ""
  constructor(public formService: FormService) {
    this.url  = environment.URL;
  }

  ngOnInit(): void {
    this.formService.getUserForms();
    this.url += "view/";
  }

  dateTime(date: any)
  {
    console.log(date);
    return new Date(date);
  }
}
