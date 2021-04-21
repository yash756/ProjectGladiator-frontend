import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BidderComponent } from './bidder/bidder.component';
import { ViewMarketplaceComponent } from './view-marketplace/view-marketplace.component';
import { RegistrationComponent } from './registration/registration.component';
import { BidderMarketPlaceComponent } from './bidder-market-place/bidder-market-place.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { FormsModule } from '@angular/forms';
import { SellRequestComponent } from './sell-request/sell-request.component';
import {  HttpClientModule } from '@angular/common/http';
import { InsuranceComponent } from './insurance/insurance.component';
//import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ClaimComponent } from './claim/claim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    BidderComponent,
    ViewMarketplaceComponent,
    RegistrationComponent,
    BidderMarketPlaceComponent,
    BidderWelcomeComponent,
    FarmerWelcomeComponent,
    SellRequestComponent,
    InsuranceComponent,
    //ClaimInsuranceComponent,
    ClaimComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
