import {Component,OnInit,inject} from '@angular/core';
import {RouterLink,ActivatedRoute} from '@angular/router';
import {TripCardComponent} from '../trip-card/trip-card';
import {TripDataService} from '../services/trip-data';
import {Trip} from '../models/trip';
@Component({selector:'app-trip-listing',imports:[RouterLink,TripCardComponent],templateUrl:'./trip-listing.html'})
export class TripListingComponent implements OnInit {
 private data=inject(TripDataService);private route=inject(ActivatedRoute);
 trips:Trip[]=[];error='';message='';loading=true;
 ngOnInit(){this.message=this.route.snapshot.queryParamMap.get('message')||'';this.load();}
 load(){this.loading=true;this.data.getTrips().subscribe({next:trips=>{this.trips=trips;this.loading=false;},error:()=>{this.error='Could not load trips. Check Express and MongoDB are running.';this.loading=false;}});}
 remove(trip:Trip){if(!confirm(`Delete ${trip.name}?`))return;this.data.deleteTrip(trip.code).subscribe({next:()=>{this.message='Trip deleted';this.load();},error:err=>this.error=err.error?.message||'Delete failed'});}
}
