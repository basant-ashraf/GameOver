import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { 
    if(localStorage.getItem('userToken') != null){
      this.saveData();
    }
  }
  userData:any= new BehaviorSubject (null);
  saveData(){
    let token=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken=jwtDecode(token);
    this.userData.next(decodedToken);
  }

  urLBase: string = "https://route-movies-api.vercel.app";


  register(userData: Object): Observable<any> {
    return this._HttpClient.post(`${this.urLBase}/signup`, userData);
  }

  login(userData: Object): Observable<any> {
    return this._HttpClient.post(`${this.urLBase}/signin`, userData);
  }
}
