import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketPlace } from './admin-approve-sold-crops/admin-approve-sold-crops.component';
import { Request } from './admin-crop-request/admin-crop-request.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  viewRequest(request: Request) : Observable<any> {
    let url = "http://localhost:8182/viewCrops";
    return this.http.get(url);
  }

  approveRequest(requestId) : Observable<any> {
    let url = "http://localhost:8182/addToMarketPlace?requestId="+requestId;
    return this.http.get(url);
  }

  viewAdminMarket(market: MarketPlace) : Observable<any> {
    let url = "http://localhost:8182/viewAdminMarket";
    return this.http.get(url);
  }

  approveCropAsSold(itemNo) : Observable<any> {
    let url = "http://localhost:8182/approveAsSold?itemNo="+itemNo;
    return this.http.get(url);
  }

  approveCropAsUnsold(itemNo) : Observable<any> {
    let url = "http://localhost:8182/approveAsUnsold?itemNo="+itemNo;
    return this.http.get(url);
  }
}
