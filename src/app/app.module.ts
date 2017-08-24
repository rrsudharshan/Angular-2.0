import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component'
import { SignupComponent } from './signup.component'
import { UserDetails } from './app.userDetails.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import {userData} from './services/app.service';
import { Http , Response } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'UserDetails', component: UserDetails },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule ({
  imports: [ BrowserModule,FormsModule,Http,
    RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,SignupComponent,PageNotFoundComponent],
  bootstrap: [ AppComponent ],
  providers:[userData]
})
export class AppModule { }
