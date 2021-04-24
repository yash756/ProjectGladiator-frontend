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
//   viewMarket(bidderId:any){
//     this.router.navigateByUrl("/app-bidder-market-place");
//     sessionStorage.setItem('bidderId',bidderId);
//   }
// }

// export class Bidder{

//     bidderId: number;
}
