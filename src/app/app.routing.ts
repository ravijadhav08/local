import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guard/index';
import {AppComponent } from './app.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


const appRoutes: Routes = [
      // otherwise redirect to home
     { path: '', redirectTo: 'home',pathMatch: 'full' },
  //  { path: '', component: AppComponent},
    //{ path: '', component: AppComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'vendors-list', component: VendorsListComponent },
    { path: 'services', component: ServicesComponent }

    

  
];

export const routing = RouterModule.forRoot(appRoutes);