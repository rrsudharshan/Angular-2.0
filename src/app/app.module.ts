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
import { HttpModule } from '@angular/http';
import { HighlightDirective } from './app.directive';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { Filters } from './app.filters.component';
import {MultiplierPipe} from './app.multiplier'



///src/app/app.filters.component.ts
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'UserDetails', component: UserDetails },
  { path: 'hero', component: HeroChildComponent },
  { path: 'heros', component: HeroParentComponent },
  { path: 'filters', component: Filters  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule ({
  imports: [ BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,SignupComponent,PageNotFoundComponent,UserDetails,HighlightDirective,HeroChildComponent,HeroParentComponent,Filters,MultiplierPipe],
  bootstrap: [ AppComponent ],
  providers:[userData]
})
export class AppModule { }
