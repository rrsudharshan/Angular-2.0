import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import {userData} from './services/app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IProduct } from './product';


@Component ({
  selector: 'my-app',
  templateUrl: '/signup.component.html',
})
export   class   SignupComponent  {
  constructor(private _router: Router,private userData: userData){
    //console.log(this.gs.aa);


  }

  iproducts: IProduct[];


  ngOnInit() : void {
    this.userData.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
  }



  model:any={};
  signup(){
    //console.log(this.model);
    alert('Hai '+this.model.firstName+' '+this.model.lastName+'   Your Details have Registered Succesfully! ');
    this.userData.setUserData(this.model);
    this._router.navigate(['/Login']);
  }

}

