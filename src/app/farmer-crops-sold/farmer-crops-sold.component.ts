import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-farmer-crops-sold',
  templateUrl: './farmer-crops-sold.component.html',
  styleUrls: ['./farmer-crops-sold.component.css']
})
export class FarmerCropsSoldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class Bid {
  bidderId : number
  marketPlace: MarketPlace = new MarketPlace();
}

export class MarketPlace{ 
  itemNo : number;
  cropName: string;
  quantity: number;
  request: Request = new Request();
}

export class Request{
  requestId : number;
  farmer : Farmer = new Farmer();
}

export class Farmer{
  farmerId: number
}
