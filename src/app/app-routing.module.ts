import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BidderMarketPlaceComponent } from './bidder-market-place/bidder-market-place.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { ContactComponent } from './contact/contact.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { InsuranceComponent } from './insurance/insurance.component'
import { FarmerMarketPlaceComponent } from './farmer-market-place/farmer-market-place.component';
import { PlaceBidsComponent } from './place-bids/place-bids.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCropRequestComponent } from './admin-crop-request/admin-crop-request.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { ClaimComponent } from './claim/claim.component';
import { AdminApproveSoldCropsComponent } from './admin-approve-sold-crops/admin-approve-sold-crops.component';

import { ApproveClaimComponent } from "./approve-claim/approve-claim.component";
import { BiddercheckstatusComponent } from "./biddercheckstatus/biddercheckstatus.component";
import { FarmerCropsSoldComponent } from './farmer-crops-sold/farmer-crops-sold.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'app-home',component: HomeComponent},
  {path:'app-contact',component: ContactComponent },
  {path:'app-about', component:AboutComponent },
  {path:'app-login', component:LoginComponent },
  {path:'app-farmer-welcome', component: FarmerWelcomeComponent},
  {path:'app-bidder-welcome', component: BidderWelcomeComponent},
  {path:'app-sell-request', component: SellRequestComponent},
  {path:'app-registration', component: RegistrationComponent},
  {path:'app-insurance', component: InsuranceComponent},
  {path:'app-bidder-market-place', component: BidderMarketPlaceComponent},
  {path :'app-farmer-market-place', component:FarmerMarketPlaceComponent},
  {path:'app-place-bids', component:PlaceBidsComponent},
  {path:'app-admin-welcome', component: AdminWelcomeComponent},
  {path:'app-admin-login', component : AdminLoginComponent},
  {path:'app-admin-crop-request', component : AdminCropRequestComponent},
  {path:'app-bidder-registration', component: BidderRegistrationComponent},
  {path:'app-bidder-login', component : BidderLoginComponent},
  {path:'app-bidder-welcome', component: BidderWelcomeComponent},
  {path:'app-claim', component: ClaimComponent},
  {path:'app-admin-approve-sold-crops', component : AdminApproveSoldCropsComponent},
  {path:'app-bidder-market-place', component: BidderMarketPlaceComponent},
  {path:'app-approve-claim', component: ApproveClaimComponent},
  {path:'app-biddercheckstatus', component: BiddercheckstatusComponent},
  {path:'app-farmer-crops-sold', component : FarmerCropsSoldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
