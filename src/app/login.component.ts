import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
  selector: 'my-app',
  templateUrl: '/login.component.html',
})
export   class   LoginComponent  {
  constructor(private _router: Router){



  }
  model:any={};
  login(){
    console.log(this.model);
    alert('Hai '+this.model.username+' Your logged in Succesfully! ');
    this._router.navigate(['/Signup']);
  }


  values = '';

  onKey(event: any) { // without type info

    console.log(event);
    this.values += event.target.value + ' | ';
  }

}
