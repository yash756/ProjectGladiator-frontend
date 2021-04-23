import { Component, OnInit } from '@angular/core';
import { BiddercheckstatusService } from '../biddercheckstatus.service';

@Component({
  selector: 'app-biddercheckstatus',
  templateUrl: './biddercheckstatus.component.html',
  styleUrls: ['./biddercheckstatus.component.css']
})
export class BiddercheckstatusComponent implements OnInit {

  constructor(private service: BiddercheckstatusService) { 
    this.bidder.bidderId = parseInt(sessionStorage.getItem('bidderId'));
    this.service.viewStatus(this.bidder).subscribe(data => {
      alert(JSON.stringify(data, null, 2));
      this.sample = data;
    })
  }

  ngOnInit(): void {
  }

  bid: Bid;
  bidder: Bidder;
  sample: any;

}

export class Bid {
  bidId: number;
  basePrice: number;
  bidAmount: number;
  dateOfBid: Date;
  marketplace: Marketplace = new Marketplace();
}

export class Marketplace {
  status: string;
}

export class Bidder {
  bidderId: number;
}
