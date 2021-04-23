import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent  {

  constructor(private service: BidderService,private router: Router) { }

  bidder:Bidder =new Bidder();
  message: string;

 register(f:NgForm ){
   this.service.registerBidder(this.bidder).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
    this.message = data['message'];
    this.router.navigate(['app-bidder-login']);
   })
  }

}

  export class Bidder{

    fullName: string;
    contactNumber:number;

    //role:String;
    address:String;
    emailId:string;
    password:string;
    accountNumber:number;
    ifscCode:string;
    // Aadharcard?:number;
    // pancard?:string;
    // addharfile?: File;
    // panfile?:File;
    state:string;
    city:string;
    pincode:number; 
  
  }
