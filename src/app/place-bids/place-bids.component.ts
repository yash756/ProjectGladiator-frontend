import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-place-bids',
  templateUrl: './place-bids.component.html',
  styleUrls: ['./place-bids.component.css']
})
export class PlaceBidsComponent implements OnInit {
constructor(private service:BidderService,private router: Router){}
  // // constructor(private service:BidderService) { 
  //   this.service.fetchCropFromMarketPlace(itemNo).subscribe(
  //     fetch=>{
  //       alert(JSON.stringify(fetch,null,2));
  //       console.log(JSON.stringify(fetch));
  //       this.sample = fetch;
  //      // console.log(fetch);
  //     }
  //   );
  // }

  marketPlace: MarketPlace;

  itemNo:any;
  bidderId:any;
  ngOnInit(): void {
   this.itemNo = sessionStorage.getItem('itemNo');
   this.bidderId= sessionStorage.getItem('bidderId');
  }
  sample: any;

  bid:Bid = new Bid();

  placeBidAgain(){
    this.service.placebids(this.itemNo,this.bidderId).subscribe(data => {
      alert(JSON.stringify(data, null, 2));
      this.sample = data;
      //form1.resetForm();
    })
  }



}

export class MarketPlace {
  itemNo : number;
  cropName :String;
  cropType :String;
  basePrice: number;
  status: String;
  quantity: number;
}
 
 export class Bid{
   bidAmount : number;
   quantity : number;
 }