import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-rating-question',
  templateUrl: './add-rating-question.component.html',
  styleUrls: ['./add-rating-question.component.css']
})
export class AddRatingQuestionComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  @ViewChild('closebutton') closebutton:any;
  question:Question = {
    id: '',
    orderNo: 0,
    type: 'Rating',
    required: false,
    question: {
      text: '',
      placeholder: '',
      offeredAnswers:[]
    },
    response:''
  }
  constructor(public formService: FormService) {}

  ngOnInit(): void {
      
  }

  add(){
    this.formService.form.Fields.push(this.question);
    this.closebutton.nativeElement.click();
    this.close.emit(true);
    this.question = {
      id: '',
      orderNo: 0,
      type: 'Rating',
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
