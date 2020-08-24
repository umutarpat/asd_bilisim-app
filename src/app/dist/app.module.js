"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_page_component_1 = require("./pages/home-page/home-page.component");
var hero_component_1 = require("./shared/components/hero/hero.component");
var header_bar_component_1 = require("./shared/components/header-bar/header-bar.component");
var about_component_1 = require("./shared/components/about/about.component");
var our_services_component_1 = require("./shared/components/our-services/our-services.component");
var contact_component_1 = require("./shared/components/contact/contact.component");
var footer_bar_component_1 = require("./shared/components/footer-bar/footer-bar.component");
var communication_component_1 = require("./shared/components/communication/communication.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_page_component_1.HomePageComponent,
                hero_component_1.HeroComponent,
                header_bar_component_1.HeaderBarComponent,
                about_component_1.AboutComponent,
                our_services_component_1.OurServicesComponent,
                contact_component_1.ContactComponent,
                footer_bar_component_1.FooterBarComponent,
                communication_component_1.CommunicationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
