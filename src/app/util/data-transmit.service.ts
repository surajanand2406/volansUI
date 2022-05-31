import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransmitService {


public authData = new BehaviorSubject({});
public userLoginData = this.authData.asObservable();

constructor() { }

sendData(data:boolean){
  this.authData.next(data)
}

}
