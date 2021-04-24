import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';


@Component({
  selector: 'app-farmer-crops-sold',
  templateUrl: './farmer-crops-sold.component.html',
  styleUrls: ['./farmer-crops-sold.component.css']
})
export class FarmerCropsSoldComponent implements OnInit {

  constructor(private service: FarmerService ,private router: Router) { 
    this.service.viewSoldCrops(this.farmerId).subscribe(data => {
    alert(JSON.stringify(data,null,2));
    console.log(JSON.stringify(data));
    this.sample = data;
    //this.sample = Array.of(this.sample);
  })
}

  ngOnInit(): void {
  }
sold : SoldCropDetails;
sample:any;
farmerId = sessionStorage.getItem('farmerId');
}

export class SoldCropDetails{
    itemNo: number;
	  cropName : String;
	  quantity: number;
	  basePrice:number;
	  bidAmount: number;
    requestId: number;
}
