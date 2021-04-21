import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private service: ClaimService) { }

  ngOnInit(): void {
  }

}

export class Claim {
  lossDate: Date;
  cause: string;
  insurance: Insurance = new Insurance();

}

export class Insurance {
  policyNo: number
} 

//store policyno in session storge in apply-for-insurance method.