import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidder-welcome ',
  templateUrl: './bidder-welcome.component.html',
  styleUrls: ['./bidder-welcome.component.css']
})
export class BidderWelcomeComponent implements OnInit {

  // bidder:Bidder;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('bidderId');
    sessionStorage.removeItem('bidderName');
    this.router.navigate(['app-bidder-login']);
    }
  

//   viewMarket(bidderId:any){
//     this.router.navigateByUrl("/app-bidder-market-place");
//     sessionStorage.setItem('bidderId',bidderId);
//   }
// }

// export class Bidder{

//     bidderId: number;
}
