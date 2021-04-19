import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farmer } from './registration/registration.component';
import { Login } from './appmodel/login';


@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8181/loginFarmer";
   return this.http.post(url, login); 
  }

  registerFarmer(farmer: Farmer) : Observable<object> {
    let url = "http://localhost:8181/registerFarmer.lti";
    return this.http.post(url,farmer);
  }
}
