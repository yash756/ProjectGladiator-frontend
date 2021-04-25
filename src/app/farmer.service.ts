import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farmer } from './registration/registration.component';
import { Login } from './appmodel/login';
import { MarketPlace } from './bidder-market-place/bidder-market-place.component';
import { Farmer1 } from './farmer-welcome/farmer-welcome.component';


@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8182/loginFarmer";
   return this.http.post(url, login); 
  }

  registerFarmer(farmer: Farmer) : Observable<object> {
    let url = "http://localhost:8182/registerFarmer.lti";
    return this.http.post(url,farmer);
  }

  // viewMarketPlace(marketPlace: MarketPlace) : Observable<any>{
  //   let url = "http://localhost:8182/fetchMarketPlace";
  //   return this.http.get(url);
  // }

  viewMarketPlace(id) : Observable<object> {
    let url = "http://localhost:8182/registerFarmer.lti";
    return this.http.get(url);
  }

  // Farmer's view sold crops 
  viewSoldCrops(farmerId) : Observable<any> {
    let url = "http://localhost:8182/farmerSoldCrops?farmerId="+farmerId;
    return this.http.get(url);
  }

  viewNotification(farmer : Farmer1) : Observable<any> {
    let url = "http://localhost:8182/notified";
    return this.http.post(url, farmer);
  }
}


