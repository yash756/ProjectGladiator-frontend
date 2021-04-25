import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-approve-sold-crops',
  templateUrl: './admin-approve-sold-crops.component.html',
  styleUrls: ['./admin-approve-sold-crops.component.css']
})
export class AdminApproveSoldCropsComponent implements OnInit {

  constructor(private service: AdminService ,private router: Router) { 
    this.service.viewAdminMarket(this.market).subscribe(data => {
    alert(JSON.stringify(data,null,2));
    console.log(JSON.stringify(data));
    this.sample = data;
    //this.sample = Array.of(this.sample);
  })
}

  ngOnInit(): void {
    
  }

  market : MarketPlace;
  sample: any;
  message: string;

  approve(itemNo){
      this.service.approveCropAsSold(itemNo).subscribe(data => {
      alert(JSON.stringify(data,null,2));
      console.log(JSON.stringify(data));
      this.message = data['message'];
    })
  }

}

export class MarketPlace {
    itemNo: number;
    cropName: string;
    cropType: string;
    quantity: string;
    basePrice: number;
    startTime: Date
    endTime: Date;
    status: string;
    maxBid: number;
    request: Request = new Request();
}

export class Request {
  requestId: number;
}
