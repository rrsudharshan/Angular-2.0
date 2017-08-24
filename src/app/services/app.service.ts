import {Injectable} from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from '../product';


@Injectable()
export class userData {
  uData=new Array();
  setUserData(obj:{'firstName':string,'lastName':string,'username':string,'password':any}): void {
    this.uData.push(obj);
    console.log(this.uData);
  }
  getUserData(){
    return this.uData;
  }
}
