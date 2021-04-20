import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from './appmodel/crop';


@Injectable({
  providedIn: 'root'
})
export class RequestCropService {

  constructor(private http: HttpClient) { }

    requestCrop(crop: Crop) : Observable<object> {
    let url = "http://localhost:8182/requestCrop";
    return this.http.post(url,crop);
  }
}
