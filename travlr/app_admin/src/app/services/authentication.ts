import {Injectable,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
@Injectable({providedIn:'root'})
export class AuthenticationService {
 private http=inject(HttpClient);
 login(email:string,password:string){return this.http.post<{token:string}>('/api/login',{email,password}).pipe(tap(result=>sessionStorage.setItem('travlr_token',result.token)));}
 logout(){sessionStorage.removeItem('travlr_token');}
 get token(){return sessionStorage.getItem('travlr_token');}
 isLoggedIn(){const token=this.token;if(!token)return false;try {const payload=JSON.parse(atob(token.split('.')[1]));return payload.exp*1000>Date.now();}catch{return false;}}
}
