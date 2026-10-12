import {Injectable,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trip} from '../models/trip';
@Injectable({providedIn:'root'})
export class TripDataService {
 private http=inject(HttpClient); private url='/api/trips';
 getTrips(){return this.http.get<Trip[]>(this.url);}
 getTrip(code:string){return this.http.get<Trip>(`${this.url}/${encodeURIComponent(code)}`);}
 addTrip(trip:Trip){return this.http.post<Trip>(this.url,trip);}
 updateTrip(code:string,trip:Trip){return this.http.put<Trip>(`${this.url}/${encodeURIComponent(code)}`,trip);}
 deleteTrip(code:string){return this.http.delete<void>(`${this.url}/${encodeURIComponent(code)}`);}
}
