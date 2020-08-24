import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import {HeaderBarComponent} from './shared/components/header-bar/header-bar.component';
import { AboutComponent } from './shared/components/about/about.component';
import { OurServicesComponent } from './shared/components/our-services/our-services.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { CommunicationComponent } from './shared/components/communication/communication.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroComponent,
    HeaderBarComponent,
    AboutComponent,
    OurServicesComponent,
    ContactComponent,
    FooterBarComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
