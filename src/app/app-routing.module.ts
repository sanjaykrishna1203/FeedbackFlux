import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { AddFormComponent } from './body/add-form/add-form.component';
import { ViewComponent } from './body/view/view.component';
import { FormLandingComponent } from './body/form-landing/form-landing.component';
import { HomeComponent } from './body/home/home.component';
import { MyFormsComponent } from './body/my-forms/my-forms.component';
import { FormResponseComponent } from './body/form-response/form-response.component';

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLanding }},
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent, },
  {path:'add-form', component:AddFormComponent, canActivate: [AngularFireAuthGuard]},
  {path:'view/:id', component:ViewComponent},
  {path:'form-landing/:id', component:FormLandingComponent, canActivate: [AngularFireAuthGuard]},
  {path:'my-forms', component:MyFormsComponent, canActivate: [AngularFireAuthGuard]},
  {path:'form-responses/:id', component:FormResponseComponent, canActivate:[AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
