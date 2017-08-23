import {Injectable} from '@angular/core';

@Injectable()
export class userData {
  uData={};
  setUserData(obj:{'firstName':string,'lastName':string,'username':string,'password':any}): void {
    this.uData=obj;
    console.log(obj);
  }
  getUserData():Object{
    return this.uData;
  }

}
