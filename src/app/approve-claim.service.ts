import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claims } from "./approve-claim/approve-claim.component";

@Injectable({
  providedIn: 'root'
})
export class ApproveClaimService {

  constructor(private http: HttpClient) { }

  viewClaims(claims: Claims) : Observable<any> {
    let url = "http://localhost:8182/approveClaims";
    return this.http.get(url);
  }

  approveClaims(claims: Claims) : Observable<any> {
    let url = "http://localhost:8182/actually-Approve";
    return this.http.post(url, claims);
  }
}
