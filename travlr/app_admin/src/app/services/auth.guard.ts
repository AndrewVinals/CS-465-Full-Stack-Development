import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication';
export const authGuard=()=>inject(AuthenticationService).isLoggedIn() || inject(Router).createUrlTree(['/login']);
