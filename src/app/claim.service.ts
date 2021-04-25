import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim, Farmer } from './claim/claim.component';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  claimInsurance(claim: Claim) : Observable<any> {
    let url = "http://localhost:8182/claim-insurance";
    return this.http.post(url, claim);
  }

  fetchInsurance(farmer: Farmer) : Observable<any> {
    let url = "http://localhost:8182/fetch-insurance-details";
    return this.http.post(url, farmer);
  }
}
