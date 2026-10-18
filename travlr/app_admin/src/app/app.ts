import {Component,inject} from '@angular/core';
import {Router,RouterOutlet,RouterLink} from '@angular/router';
import {AuthenticationService} from './services/authentication';
@Component({selector:'app-root',imports:[RouterOutlet,RouterLink],templateUrl:'./app.html',styleUrl:'./app.css'})
export class App {auth=inject(AuthenticationService);private router=inject(Router);logout(){this.auth.logout();this.router.navigateByUrl('/login');}}
