import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmer-welcome',
  templateUrl: './farmer-welcome.component.html',
  styleUrls: ['./farmer-welcome.component.css']
})
export class FarmerWelcomeComponent implements OnInit {

  constructor(private service: FarmerService, private router: Router) {
    this.farmer.id = parseInt(sessionStorage.getItem('farmerId'));
    this.service.viewNotification(this.farmer).subscribe(data => {
      //alert(JSON.stringify(data, null, 2));
      alert(data['content']);
    })
  }

  ngOnInit(): void {
  }

  farmer : Farmer1 = new Farmer1();
 
logout(){
  sessionStorage.removeItem('farmerId');
  sessionStorage.removeItem('farmerName');
  this.router.navigate(['app-login']);
  }
}

export class Farmer1{
  id:number;
}

