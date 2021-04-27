import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BidDto } from '../bid-dto';
import { BidderService } from '../bidder.service';

 @Component({
   selector: 'app-bidder-market-place',
   templateUrl: './bidder-market-place.component.html',
   styleUrls: ['./bidder-market-place.component.css']
 })
 export class BidderMarketPlaceComponent implements OnInit {

  marketPlace:MarketPlace;
  index:number=0;
 // marketPlace:BidDto[]=[];

  constructor(private service:BidderService ,private router: Router) {
    this.service.viewMarketPlace(this.marketPlace).subscribe(
      fetch=>{
        //alert(JSON.stringify(fetch,null,2));
        console.log(JSON.stringify(fetch));
        this.sample = fetch;
       // console.log(fetch);
      }
    );
   }

  ngOnInit(): void {
   
  }

  sample: any;

  

  placeBid(itemNo:any){
    this.router.navigateByUrl("/app-place-bids");
    sessionStorage.setItem('itemNo',itemNo);
  }

}

export class MarketPlace {
  itemNo : number;
  cropName :String;
  cropType :String;
  basePrice: number;
  status: String;
  quantity: number;
  maxBid: number;
 
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