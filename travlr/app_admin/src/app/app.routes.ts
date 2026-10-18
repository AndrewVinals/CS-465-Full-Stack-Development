import {Routes} from '@angular/router';
import {TripListingComponent} from './trip-listing/trip-listing';
import {TripFormComponent} from './trip-form/trip-form';
import {LoginComponent} from './login/login';
import {authGuard} from './services/auth.guard';
export const routes:Routes=[{path:'login',component:LoginComponent},{path:'',component:TripListingComponent},{path:'add-trip',component:TripFormComponent,canActivate:[authGuard]},{path:'edit-trip/:tripCode',component:TripFormComponent,canActivate:[authGuard]},{path:'**',redirectTo:''}];
