import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-market-place',
  templateUrl: './bidder-market-place.component.html',
  styleUrls: ['./bidder-market-place.component.css']
})
export class BidderMarketPlaceComponent implements OnInit {

  name:string;
  id:number;
  crop:availablecrop[];
  basePrice:number;

  ngOnInit():void{
    
  }
}
