import { Component, EnvironmentInjector, EnvironmentProviders, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-form-landing',
  templateUrl: './form-landing.component.html',
  styleUrls: ['./form-landing.component.css']
})
export class FormLandingComponent implements OnInit{

  id:any = '';
  url:string = ''
  constructor(private route:ActivatedRoute) {
    this.url = environment.URL;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.url += "view/"+this.id;
  }

}
