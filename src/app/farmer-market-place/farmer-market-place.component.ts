import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BidderService } from '../bidder.service';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-market-place',
  templateUrl: './farmer-market-place.component.html',
  styleUrls: ['./farmer-market-place.component.css']
})
export class FarmerMarketPlaceComponent implements OnInit {

  marketPlace:MarketPlace;
  

  constructor(private service:FarmerService ,private router: Router) {
    this.service.viewMarketPlace(this.marketPlace).subscribe(
      fetch=>{
        alert(JSON.stringify(fetch,null,2));
        // console.log(JSON.stringify(fetch));
        this.sample = fetch;
       // console.log(fetch);
      }
    );
   }
   sample: any; 

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
  farmer:Farmer;
}

export class Farmer{
  id: number;
}