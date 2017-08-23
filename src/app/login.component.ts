import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
  selector: 'my-app',
  templateUrl: '/login.component.html',
})
export   class   LoginComponent  {
  constructor(private _router: Router){}
  model:any={};
  login(){
    console.log(this.model);
    this._router.navigate(['/Signup']);
  }
}
