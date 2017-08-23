import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component'
import { SignupComponent } from './signup.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
];

@NgModule ({
  imports: [ BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,SignupComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
