import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:string="";
  rating:number = 0;
  constructor(public formService: FormService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formService.getForm(id);
  }

  submit(){
    this.formService.saveResponse();
  }

  onRatingChange(event: any, i:number)
  {
    this.formService.form.Fields[i].response = event.rating;
  }
}
