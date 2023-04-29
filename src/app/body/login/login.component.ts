import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";
 constructor(public authService: AuthService, private router: Router) {}

 ngOnInit(): void {
     
 }

 login(){
  this.authService.SignIn(this.email, this.password).then(()=>{
    this.router.navigate(['dashboard']);
  })
 }
 onSignInWithGoogle(){
  this.authService.GoogleAuth().then(()=>{
    this.router.navigate(['dashboard']);
  })
 }
}
