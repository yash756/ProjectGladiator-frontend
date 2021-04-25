import { DatePipe, formatDate } from '@angular/common';
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

  marketPlace: MarketPlace = new MarketPlace();
  bidder: Bidder = new Bidder();

  itemNo:any;
  bidderId:any;
  ngOnInit(): void {
   this.itemNo = sessionStorage.getItem('itemNo');
   this.bidderId= sessionStorage.getItem('bidderId');

   this.service.fetchCropFromMarketPlace(this.itemNo).subscribe(data =>{
     alert(JSON.stringify(data,null,2));
     this.marketPlace=data;
   })
  }
  // this.service.placebids(this.itemNo,this.bidderId).subscribe(data =>{
  //   alert(JSON.stringify(data,null,2));
  //   this.marketPlace=data;
  // })
  // }
  sample: any;
  // myDate = new Date();

  bid:Bid = new Bid();


  placeBidAgain(){

    // console.log("hello");
    this.bid.basePrice=this.marketPlace['basePrice'];
    // this.bid.dateOfBid= this.myDate.toDateString;
    // this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.bid.bidder.bidderId= parseInt(sessionStorage.getItem('bidderId'));
    this.bid.marketPlace.itemNo=parseInt(sessionStorage.getItem('itemNo'));
    console.log(this.bid);
   
    this.service.placebids(this.bid).subscribe(data => {
      alert(JSON.stringify(data, null, 2));
      this.sample = data;
     
      //form1.resetForm();
    })
  

  }




}

export class MarketPlace {
  itemNo : number;
  quantity : number;
  maxBid: number;
  cropName :String;
  cropType :String;
  basePrice: number;
  status: String;
}

export class Bidder{
  bidderId: number;
 }
 
 export class Bid{

   basePrice: number;
   bidAmount: number;
   dateOfBid : Date;
   marketPlace: MarketPlace= new MarketPlace();
   bidder: Bidder = new Bidder();
 }
