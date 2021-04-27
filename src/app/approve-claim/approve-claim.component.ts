import { Component, OnInit } from '@angular/core';
import { ApproveClaimService } from "../approve-claim.service";

@Component({
  selector: 'app-approve-claim',
  templateUrl: './approve-claim.component.html',
  styleUrls: ['./approve-claim.component.css']
})
export class ApproveClaimComponent implements OnInit {

  constructor(private service: ApproveClaimService) { 
    this.service.viewClaims(this.claims).subscribe(data => {
      //alert(JSON.stringify(data, null, 2));
      this.sample = data; //do routing before testing
    })
   }

  ngOnInit(): void {
  }

  claims : Claims;
  sample : any;

  //add function for a button, which will send notification
  approve(item : number){
    this.service.approveClaims(this.sample[item]).subscribe(data => {
      //alert(JSON.stringify(data, null, 2));
      alert(data['message']);
    })
  }

}

export class Claims {
  id: number;
  insuranceCompany: string;
  insureeName: string;
  sumInsured: number;
  cause: string;
  lossDate: Date;
  farmer : Farmer = new Farmer();
}

export class Farmer {
  id: number;
}