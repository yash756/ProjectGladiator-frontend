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
import { PlaceBidsComponent } from './place-bids/place-bids.component';
import { FarmerMarketPlaceComponent } from './farmer-market-place/farmer-market-place.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCropRequestComponent } from './admin-crop-request/admin-crop-request.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { ClaimComponent } from './claim/claim.component';
import { ApproveClaimComponent } from './approve-claim/approve-claim.component';
import { BiddercheckstatusComponent } from './biddercheckstatus/biddercheckstatus.component';


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
    PlaceBidsComponent,
    FarmerMarketPlaceComponent,
    AdminWelcomeComponent,
    AdminLoginComponent,
    AdminCropRequestComponent,
    BidderRegistrationComponent,
    BidderLoginComponent,
    ClaimComponent,
    ApproveClaimComponent,
    BiddercheckstatusComponent
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
