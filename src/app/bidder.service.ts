import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BidderMarketPlaceComponent, MarketPlace } from './bidder-market-place/bidder-market-place.component';
import { Bid } from './place-bids/place-bids.component';

import { Login } from './appmodel/login';
import { Bidder } from './bidder-registration/bidder-registration.component';


@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http: HttpClient) { }

  
   placebids(bid:Bid) : Observable<any>{

      let url = "http://localhost:8182/placeBids";
      return this.http.post(url,bid);
   }

  fetchCropFromMarketPlace(itemNo) : Observable<any>{
    let url = "http://localhost:8182/fetchCropFromMarketPlace?itemNo="+itemNo;
    return this.http.get(url);
  }

  
  viewMarketPlace(marketPlace: MarketPlace) : Observable<any>{
    let url = "http://localhost:8182/fetchMarketPlace";
    return this.http.get(url);
  }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8182/loginBidder";
   return this.http.post(url, login); 
  }

  registerBidder(bidder: Bidder) : Observable<object> {
    let url = "http://localhost:8182/registerBidder.lti";
    return this.http.post(url,bidder);
  }

}
