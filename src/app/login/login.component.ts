import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { FarmerService } from '../farmer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // email: string ;
  // password: string ;
  // //message?: string;
  // check: boolean;

  login: Login = new Login();
  message: string;

  constructor(private farmerService: FarmerService ,private router: Router) {}

  // login() {
  //     if(this.email == 'farmer@gmail.com' ){
  //         if( this.password == '123'){
  //         sessionStorage.setItem('loggedInUsername',this.email)
  //         this.router.navigate(['app-farmer-welcome']);
  //         alert(JSON.stringify("Welcome Farmer "))
  //         }
  //         else{
  //         this.message ='Invalid email or password';
  //         this.check= true;
  //         }
  //     }
  //     else if(this.email == 'bidder@gmail.com'){
  //         if( this.password == '123'){
  //           sessionStorage.setItem('loggedInUsername',this.email)
  //           this.router.navigate(['app-bidder-welcome']);
  //           alert(JSON.stringify("Welcome Bidder "))
  //           }
  //         else{
  //         this.message ='Invalid email or password';
  //         this.check= true;
  //         }
  //     }
  // }

  loginCheck() {
         
      console.log(this.login);
      this.farmerService.login(this.login).subscribe(response => {
        //alert(JSON.stringify(response));
        console.log(response);
        if(response.status == true) {
          let farmerId = response.farmerId;
          let fullName = response.fullName;
          sessionStorage.setItem('farmerId', String(farmerId));
          sessionStorage.setItem('farmerName', fullName);
          this.router.navigate(['app-farmer-welcome']);
        }
        else
          this.message = response.message;
      })
  
  }

  // email: string = 'xyz@gmail.com' ;
  // password: string = '12345678';
  // message: string='Successfully logged in.....';
  // check: boolean = true;

  // constructor(private router: Router) {}

  

  // login() {
  //   if(this.email == 'xyz@gmail.com' && this.password == '12345678'){
  //     this.message = 'Successfully logged in.....';
  //     this.check= true;

  //   }
  //   else{
  //     this.message ='Invalid email or password';
  //     this.check= true;
  //   }
  // }

}
