import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private service: FarmerService,private router: Router) { }

  farmer:Farmer =new Farmer();
  message: string;

 register(f:NgForm ){
   this.service.registerFarmer(this.farmer).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
    this.message = data['message'];
    this.router.navigate(['app-login']);
   })
  }

}

  export class Farmer{
    
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

