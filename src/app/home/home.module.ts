import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CreationBannerComponent } from './components/creation-banner/creation-banner.component';
import { BenefitCardComponent } from './components/benefit-card/benefit-card.component';
import { HomeComponent } from './components/home-container/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HeroBannerComponent,
    CreationBannerComponent,
    BenefitCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HeroBannerComponent,
    CreationBannerComponent,
    BenefitCardComponent,
    HomeComponent
  ]
})
export class HomeModule { }
