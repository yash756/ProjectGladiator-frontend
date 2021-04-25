import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BidderService } from '../bidder.service';
import { FarmerService } from '../farmer.service';
import { Bid } from '../place-bids/place-bids.component';
import { ViewMarketplaceComponent } from '../view-marketplace/view-marketplace.component';

@Component({
  selector: 'app-farmer-market-place',
  templateUrl: './farmer-market-place.component.html',
  styleUrls: ['./farmer-market-place.component.css']
})
export class FarmerMarketPlaceComponent implements OnInit {


  
  // marketPlace.farmer.id = sessionStorage.getItem('farmerId');
  constructor(private service:FarmerService,private router: Router) {
    this.service.viewMarketPlace(this.id).subscribe(
      fetch=>{
        alert(JSON.stringify(fetch,null,2));
        console.log(JSON.stringify(fetch));
        this.sample = fetch;
       // console.log(fetch);
      }
    );
   }
   sample: any;
  id=sessionStorage.getItem('farmerId');

  ngOnInit(): void {
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

// export class Farmer{
//   id: number;
// }

// export class Bid{
//   bidAmount:number;
//   marketPlace : MarketPlace;
// }