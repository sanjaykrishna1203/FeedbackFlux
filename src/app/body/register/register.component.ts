import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(public authService:AuthService,public router: Router) { }
  email:string="";
  password:string="";
  ngOnInit(): void {
  }

  signup(){
    this.authService.SignUp(this.email, this.password).then(()=>
    {
      this.router.navigate(['dashboard']);
    })
  }
  onSignInWithGoogle(){
    this.authService.GoogleAuth().then(()=>{
      this.router.navigate(['dashboard']);
    })
   }
}
