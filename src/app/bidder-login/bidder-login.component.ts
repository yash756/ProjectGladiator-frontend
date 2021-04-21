import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-bidder-login',
  templateUrl: './bidder-login.component.html',
  styleUrls: ['./bidder-login.component.css']
})
export class BidderLoginComponent {

  login: Login = new Login();
  message: string;

  constructor(private bidderService: BidderService ,private router: Router) {}

  loginCheck() {
         
    console.log(this.login);
    this.bidderService.login(this.login).subscribe(response => {
      alert(JSON.stringify(response));
      console.log(response);
      if(response.status == true) {
        let bidderId = response.bidderId;
        let fullName = response.fullName;
        sessionStorage.setItem('bidderId', String(bidderId));
        sessionStorage.setItem('bidderName', fullName);
        this.router.navigate(['app-bidder-welcome']);
      }
      else
        this.message = response.message;
    })

}

}
