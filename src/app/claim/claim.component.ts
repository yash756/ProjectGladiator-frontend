import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private service: ClaimService) { }

  ngOnInit(): void {
  }

  claim: Claim = new Claim();
  message: string;

  claiming(f:NgForm) {
    this.claim.farmer.id = parseInt(sessionStorage.getItem('farmerId'));
    this.service.claimInsurance(this.claim).subscribe(data => {
      alert(JSON.stringify(data));
      
    })
  }


}

export class Claim {
  lossDate: Date;
  cause: string;
  farmer: Farmer = new Farmer();

}

export class Farmer {
  id: number;
}
//store policyno in session storge in apply-for-insurance method.