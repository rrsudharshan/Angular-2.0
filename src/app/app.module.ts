import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component'
import { RegisterComponent } from './register.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
];

@NgModule ({
  imports: [ BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,RegisterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
