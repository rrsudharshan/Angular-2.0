import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
  selector: 'my-app',
  templateUrl: '/register.component.html',
})
export   class   RegisterComponent  {
  constructor(private _router: Router){}
  model:any={};
  register(){
    console.log(this.model);
    this._router.navigate(['/Login']);
  }
}
