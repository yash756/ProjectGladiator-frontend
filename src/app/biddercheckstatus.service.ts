import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bidder } from './biddercheckstatus/biddercheckstatus.component';

@Injectable({
  providedIn: 'root'
})
export class BiddercheckstatusService {

  constructor(private http: HttpClient) { }

  viewStatus(bidder: Bidder) : Observable<any> {
    let url = "http://localhost:8182/checkStatusOfBids";
    return this.http.post(url, bidder);
  }
}
