import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

constructor(private http:HttpClient) { }

httpOptions = {
  headers: new HttpHeaders(),
};

getImg(){
  return this.http.get('assets/images');
}

}
