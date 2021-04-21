import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MarketplaceService } from '../marketplace.service';

 @Component({
   selector: 'app-bidder-market-place',
   templateUrl: './bidder-market-place.component.html',
   styleUrls: ['./bidder-market-place.component.css']
 })

@Injectable({
  providedIn: 'root'
})
export class BidderMarketPlaceComponent {

  constructor(private http: HttpClient) { }
  //return data in DB
  viewRequest(request: Request) : Observable<any> {
    let url = "http://localhost:8182/fetchMarketPlace";
    return this.http.get(url);
  }

}

// export class MarketPlace {
//   itemNo: number;
//   status: string;
//   basePrice: number;
//   cropName: string;
//   cropType: string;
//   quantity:number;
//   requestId:number;
// }

// export class Farmer {
//   id: number;
// }