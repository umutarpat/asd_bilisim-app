import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import {HeaderBarComponent} from './shared/components/header-bar/header-bar.component';
import { AboutComponent } from './shared/components/about/about.component';
import { OurServicesComponent } from './shared/components/our-services/our-services.component';
import { FooterBarComponent } from './shared/components/footer-bar/footer-bar.component';
import { ContactFormComponent } from './shared/components/contact-form/contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroComponent,
    HeaderBarComponent,
    AboutComponent,
    OurServicesComponent,
    FooterBarComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
