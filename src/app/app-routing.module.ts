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
  {path:'app-insurance', component: InsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
