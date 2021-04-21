import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { Bidder } from './bidder-registration/bidder-registration.component';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8182/loginBidder";
   return this.http.post(url, login); 
  }

  registerBidder(bidder: Bidder) : Observable<object> {
    let url = "http://localhost:8182/registerBidder.lti";
    return this.http.post(url,bidder);
  }
}
