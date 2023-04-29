import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-multiple-choice',
  templateUrl: './add-multiple-choice.component.html',
  styleUrls: ['./add-multiple-choice.component.css']
})
export class AddMultipleChoiceComponent implements OnInit{

  @Output() close: EventEmitter<any> = new EventEmitter();
  @ViewChild('closebutton') closebutton:any;
  question:Question = {
    id: '',
    orderNo: 0,
    type: 'Multiple',
    required: false,
    question: {
      text: '',
      placeholder: '',
      offeredAnswers: [{text:''}],
    },
    response:''
  }
  constructor(public formService:FormService) {}

  ngOnInit(): void {
      
  }

  AddOption(){
    this.question.question.offeredAnswers.push({text:''});
  }

  add(){
    console.log(this.question);
    
    this.formService.form.Fields.push(this.question);
    this.closebutton.nativeElement.click();
    this.close.emit(true);
    this.question = {
      id: '',
      orderNo: 0,
      type: 'Multiple',
      required: false,
      question: {
        text: '',
        placeholder: '',
        offeredAnswers: [],
      },
      response:''
    }
  }

  removeOption(index:number)
  {
    this.question.question.offeredAnswers.splice(index,1);
  }

}
