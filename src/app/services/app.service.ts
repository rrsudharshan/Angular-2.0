import {Injectable} from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from '../product';

@Injectable()
export class userData {
  uData=new Array();
  //private _producturl='../data.json';



  constructor(private _http: Http){

   // console.log(this._producturl);

  }

  getproducts(): Observable<IProduct[]> {
    return this._http.get('assets/data.json')
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
  }

  setUserData(obj:{'firstName':string,'lastName':string,'username':string,'password':any}): void {
    this.uData.push(obj);
    console.log(this.uData);
  }
  getUserData(){
    return this.uData;
  }






}
