import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './body/login/login.component';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/compat/functions';
import { RegisterComponent } from './body/register/register.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
import { HttpClientModule } from '@angular/common/http';
import { AddFormComponent } from './body/add-form/add-form.component';
import { AddOpenQuestionComponent } from './body/add-form/add-open-question/add-open-question.component';
import { AddMultipleChoiceComponent } from './body/add-form/add-multiple-choice/add-multiple-choice.component';
import { AddRatingQuestionComponent } from './body/add-form/add-rating-question/add-rating-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from 'angular-star-rating';
import { ViewComponent } from './body/view/view.component';
import { FormLandingComponent } from './body/form-landing/form-landing.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HomeComponent } from './body/home/home.component';
import { MyFormsComponent } from './body/my-forms/my-forms.component';
import { FormResponseComponent } from './body/form-response/form-response.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddFormComponent,
    AddOpenQuestionComponent,
    AddMultipleChoiceComponent,
    AddRatingQuestionComponent,
    ViewComponent,
    FormLandingComponent,
    HomeComponent,
    MyFormsComponent,
    FormResponseComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireFunctionsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    StarRatingModule.forRoot(),
    ClipboardModule,
    NgxPaginationModule,
    NgxChartsModule
    
  ],
  providers: [AuthService,
    { provide: REGION, useValue: 'us-central1' },
    { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['http://localhost:9099'] : undefined },
    { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', '8080'] : undefined },
    { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', '5001'] : undefined }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
