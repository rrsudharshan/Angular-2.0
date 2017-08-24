import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import {userData} from './services/app.service';
@Component ({
  selector: 'my-app',
  templateUrl: '/app.userDetails.component.html',
})
export   class   UserDetails  {
  uDetails;
  constructor(private _router: Router,private userData: userData){
    this.uDetails=this.userData.getUserData();

    console.log(this.uDetails);
  }

}

