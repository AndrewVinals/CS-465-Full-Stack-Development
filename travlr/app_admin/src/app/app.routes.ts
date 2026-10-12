import {Routes} from '@angular/router';
import {TripListingComponent} from './trip-listing/trip-listing';
import {TripFormComponent} from './trip-form/trip-form';
export const routes:Routes=[{path:'',component:TripListingComponent},{path:'add-trip',component:TripFormComponent},{path:'edit-trip/:tripCode',component:TripFormComponent},{path:'**',redirectTo:''}];
