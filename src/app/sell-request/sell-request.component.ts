import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  crop: Crop = new Crop();
  constructor() { }

  ngOnInit(): void {
  }

  register(f: NgForm) {
    if(f.valid){
      alert(JSON.stringify("Successfully registered"))
      //console.log(this.crop);
    } 
    else
      alert("Please fix all the errors in the form and submit again")  
  }

}

export class Crop {
  name: string;
  cropType: string;
  fertilizerType: string;
  quantity: string;
  basePrice: number;
  startDate: Date;
  endDate: Date;
  soilPh: number;

}
