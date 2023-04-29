import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-open-question',
  templateUrl: './add-open-question.component.html',
  styleUrls: ['./add-open-question.component.css']
})
export class AddOpenQuestionComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  @ViewChild('closebutton') closebutton:any;
  constructor(public formService: FormService) { }

  question:Question = {
    id: '',
    orderNo: 0,
    type: 'Open',
    required: false,
    question: {
      text: '',
      placeholder: '',
      offeredAnswers:[]
    },
    response:''
  }
  ngOnInit(): void {

  }

  add(){
    this.formService.form.Fields.push(this.question);
    this.closebutton.nativeElement.click();
    this.close.emit(true);
    this.question = {
      id: '',
      orderNo: 0,
      type: 'Open',
      required: false,
      question: {
        text: '',
        placeholder: '',
        offeredAnswers:[]
      },
      response:''
    }
  }
}
