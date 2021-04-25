import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Crop } from '../appmodel/crop';
import { RequestCropService } from '../request-crop.service';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  crop: Crop = new Crop();
  message: string;
  constructor(private service: RequestCropService,private router: Router) { }

  ngOnInit(): void {
  }

  register(f: NgForm) {
    this.crop.farmer.id = parseInt(sessionStorage.getItem('farmerId')) ;
    this.service.requestCrop(this.crop).subscribe(data =>{
      alert(JSON.stringify(data));
      console.log(JSON.stringify(data));
      this.message = data['message'];
      
      this.router.navigate(['app-farmer-welcome']);
     })

}

}
