import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string ;
  password: string ;
  message: string;
  check: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
  if(this.email == 'admin@gmail.com' ){
    if( this.password == 'admin'){
    sessionStorage.setItem('loggedInUsername',this.email)
    this.router.navigate(['app-admin-welcome']);
    alert(JSON.stringify("Welcome Admin "))
    }
    else{
    this.message ='Invalid email or password';
    this.check= true;
    }
  }  
}
}
