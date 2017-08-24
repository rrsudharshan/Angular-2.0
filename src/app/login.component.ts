import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component ({
  selector: 'my-app',
  templateUrl: '/login.component.html',
})
export   class   LoginComponent  {
  constructor(private _router: Router,private http: HttpClientModule){


    this.http.get('data.json')
      .map((response: Response) =>  response.json())
      .do(data => console.log(JSON.stringify(data)));


  }


  model:any={};
  login(){
    console.log(this.model);
    alert('Hai '+this.model.username+' Your logged in Succesfully! ');
    this._router.navigate(['/Signup']);
  }
}
