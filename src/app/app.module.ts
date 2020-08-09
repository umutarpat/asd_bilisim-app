import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './pages/home-page/components/header/header.component';
import { BodyComponent } from './pages/home-page/components/body/body.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import {HeaderBarComponent} from './shared/components/header-bar/header-bar.component';
import { FooterComponent } from './pages/home-page/components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BodyComponent,
    HeroComponent,
    HeaderBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
