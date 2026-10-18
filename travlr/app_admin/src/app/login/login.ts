import {Component,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication';
@Component({selector:'app-login',imports:[FormsModule],templateUrl:'./login.html'})
export class LoginComponent {
 private auth=inject(AuthenticationService);private router=inject(Router);
 email='';password='';error='';loading=false;
 submit(){this.error='';this.loading=true;this.auth.login(this.email,this.password).subscribe({next:()=>this.router.navigateByUrl('/'),error:err=>{this.error=err.error?.message||'Login failed';this.loading=false;}});}
}
