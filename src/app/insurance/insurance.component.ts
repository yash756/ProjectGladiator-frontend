import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private service: InsuranceService) { }

  ngOnInit(): void {
  }

  insurance: Insurance = new Insurance();

  sample: any;

  message: string;

  calculate(form1:NgForm) {
    this.service.calculateInsurance(this.insurance).subscribe(data => {
      alert(JSON.stringify(data, null, 2));
      console.log(JSON.stringify(data));
      this.sample = data;
      this.sample = Array.of(this.sample);
      //form1.resetForm();
    })
  }

  //store policyNo in session storage.
  apply(form1:NgForm) {
    this.service.applyInsurance(this.insurance).subscribe(data => {
      alert(JSON.stringify(data, null,2));
      console.log(JSON.stringify(data));
      //let policyNo = data.appliedInsuranceId;
      //sessionStorage.setItem('policyNo', String(policyNo));
      this.insurance.farmer.id = parseInt(sessionStorage.getItem("farmerId"));
      form1.resetForm();
    })
  }

}

export class Insurance {
  cropName: string;
  area: number;
  season: string;
  year: Date;
  farmer: Farmer = new Farmer();
}

export class Farmer {
  id: number;
}