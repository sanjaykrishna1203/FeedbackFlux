import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
edit:boolean = true;
preview:boolean = false;
formTitle:string = "";
questionArray:Question[] = [];
constructor(public formService:FormService) {}

ngOnInit(): void {
    
}

editClicked(){
  this.edit = true;
  this.preview = false;
}

previewClicked(){
  this.edit = false;
  this.preview = true;
}

update(boo: any)
{
  console.log("Emitted");
  
  this.formService.form = this.formService.form;
  console.log(this.formService.form);
}

delete(i: number)
{
  this.formService.form.Fields.splice(i, 1);
}

save(){
  this.formService.saveForm();
}
}
