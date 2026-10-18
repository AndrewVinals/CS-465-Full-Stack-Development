import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthenticationService} from './authentication';
export const authInterceptor:HttpInterceptorFn=(req,next)=>{
 const auth=inject(AuthenticationService);
 if(auth.isLoggedIn() && req.url.startsWith('/api/'))req=req.clone({setHeaders:{Authorization:`Bearer ${auth.token}`}});
 return next(req);
};
