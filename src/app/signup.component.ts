import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
  selector: 'my-app',
  templateUrl: '/signup.component.html',
})
export   class   SignupComponent  {
  constructor(private _router: Router){}
  model:any={};
  signup(){
    console.log(this.model);
    alert('Hai '+this.model.firstName+' '+this.model.lastName+'   Your Details have Registered Succesfully! ');
    this._router.navigate(['/Login']);
  }
}
