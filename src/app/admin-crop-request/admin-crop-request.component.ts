import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-crop-request',
  templateUrl: './admin-crop-request.component.html',
  styleUrls: ['./admin-crop-request.component.css']
})
export class AdminCropRequestComponent implements OnInit {

  constructor(private service: AdminService ,private router: Router) { 
      this.service.viewRequest(this.request).subscribe(data => {
      alert(JSON.stringify(data,null,2));
      console.log(JSON.stringify(data));
      this.sample = data;
      //this.sample = Array.of(this.sample);
    })
  }

  ngOnInit(): void {

  }

  request : Request;
  sample: any;
  message: string;

  add(requestId){
      this.service.approveRequest(requestId).subscribe(data => {
      alert(JSON.stringify(data,null,2));
      console.log(JSON.stringify(data));
      this.message = data['message'];
    })
  }

}

export class Request {
    requestId: number;
    cropName: string;
    cropType: string;
    fertilizerType: string;
    quantity: string;
    basePrice: number;
    // startDate: Date;
    // endDate: Date;
    soilPh: number;
    bidCutoffTime: number;
    farmer: Farmer = new Farmer();
}

export class Farmer {
  farmerId: number;
}