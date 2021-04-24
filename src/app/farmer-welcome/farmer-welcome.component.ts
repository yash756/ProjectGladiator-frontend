import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-welcome',
  templateUrl: './farmer-welcome.component.html',
  styleUrls: ['./farmer-welcome.component.css']
})
export class FarmerWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
logout(){
  sessionStorage.removeItem('farmerId');
  sessionStorage.removeItem('farmerName');
  this.router.navigate(['app-login']);
}
}
