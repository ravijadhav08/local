import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 
import {FormsModule }from '@angular/forms'; 
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {BootstrapModalModule } from 'ng2-bootstrap-modal'; 


import {fakeBackendProvider }from './_helpers/index'

import {AppComponent }from './app.component'; 
import {routing }from './app.routing'; 
import {AlertComponent}from './alert/alert.component'; 
import {AuthGuard}from './_guard/index'; 
import {JwtInterceptor}from './_helpers/index'; 
import { GoogleplaceDirective } from './_directives/googleplace.directive';
import {AlertService, AuthenticationService, UserService, GeoService }from './_service/index'; 
import {HttpModule }from '@angular/http/src/http_module'; 

import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchComponent } from './search/search.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { VendorsProfileComponent } from './vendors-profile/vendors-profile.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {} from './alert/alert.component';
import { GridcomponentComponent } from './gridcomponent/gridcomponent.component';
import { HomeComponent } from '../app/home/home.component';
import { GooglePlaceModule } from './_directives/index';
import { BookformComponent } from './bookform/bookform.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    MenubarComponent,
    SearchComponent,
    LocationSearchComponent,
    LoginComponent,
    ServicesComponent,
    HowitworksComponent,
    WhyusComponent,
    CustomerReviewsComponent,
    ContactComponent,
    FooterComponent,
    VendorsListComponent,
    VendorsProfileComponent,
    UsersProfileComponent,
    SidebarComponent,
    AlertComponent,
    GridcomponentComponent,
    HomeComponent,
    BookformComponent    
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    FormsModule,
    HttpClientModule,
    routing,
    GooglePlaceModule
  ],
  entryComponents: [
    LoginComponent
  ], 
  providers:[
    AuthGuard, 
    AlertService, 
    AuthenticationService, 
    UserService,  {
      provide:HTTP_INTERCEPTORS, 
      useClass:JwtInterceptor, 
      multi:true
    }, 
    GeoService,    
    fakeBackendProvider
  ], 
  bootstrap:[AppComponent]
})
export class AppModule {}
