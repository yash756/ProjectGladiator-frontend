import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../admin-approve-sold-crops/admin-approve-sold-crops.component';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../registration/registration.component';

@Component({
  selector: 'app-farmer-crops-unsold',
  templateUrl: './farmer-crops-unsold.component.html',
  styleUrls: ['./farmer-crops-unsold.component.css']
})
export class FarmerCropsUnsoldComponent implements OnInit {

  constructor(private service: FarmerService ,private router: Router) { 
    this.service.viewUnSoldCrops(this.farmerId).subscribe(data => {
    //alert(JSON.stringify(data,null,2));
    console.log(JSON.stringify(data));
    this.sample = data;
    //this.sample = Array.of(this.sample);
  })
}

ngOnInit(): void {
}

sample:any;
farmerId = sessionStorage.getItem('farmerId');
}

export class MarketPlace{

  itemNo : number;
  cropName: string;
  cropType: string;
  basePrice: number;
  status: string;
  quantity: number;
  startTime: Date;
  endTime: Date;
  maxBid: number;
  
}

