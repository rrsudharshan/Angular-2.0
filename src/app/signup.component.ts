import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import {userData} from './services/app.service';
@Component ({
  selector: 'my-app',
  templateUrl: '/signup.component.html',
  providers : [userData]
})
export   class   SignupComponent  {
  constructor(private _router: Router,private userData: userData){
    console.log(this.userData.getUserData());

  }
  model:any={};
  signup(){
    console.log(this.model);
    alert('Hai '+this.model.firstName+' '+this.model.lastName+'   Your Details have Registered Succesfully! ');
    this.userData.setUserData(this.model);
    this._router.navigate(['/Login']);
  }

}

