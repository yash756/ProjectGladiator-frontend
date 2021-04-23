import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insurance } from './appmodel/insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  calculateInsurance(insurance: Insurance) : Observable<any> {
    let url = "http://localhost:8182/calculate-premium";
    return this.http.post(url, insurance);
  }

  applyInsurance(insurance: Insurance) : Observable<any> {
    let url = "http://localhost:8182/apply-for-insurance";
    return this.http.post(url, insurance);
  }
}
