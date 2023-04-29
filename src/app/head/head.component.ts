import { Component, OnInit } from '@angular/core';
import { StartService } from '../start.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{
  constructor(public startService: StartService, private authService:AuthService) {}
  ngOnInit(): void {
      this.startService.startApplication();
  }

  logout(){
    this.authService.SignOut().then(()=>{
      this.startService.startApplication();
    })
  }
}
