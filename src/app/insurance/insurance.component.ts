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

  calculate(f:NgForm) {
    this.service.calculateInsurance(this.insurance).subscribe(data => {
      alert(JSON.stringify(data, null, 2));
      this.sample = data;
    })
  }

}

export class Insurance {
  cropName: string;
  area: number;
  season: string;
  year: Date;
}