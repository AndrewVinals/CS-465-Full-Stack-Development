import {Component,OnInit,inject} from '@angular/core';
import {FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import {ActivatedRoute,Router,RouterLink} from '@angular/router';
import {TripDataService} from '../services/trip-data';
@Component({selector:'app-trip-form',imports:[ReactiveFormsModule,RouterLink],templateUrl:'./trip-form.html'})
export class TripFormComponent implements OnInit {
 private fb=inject(FormBuilder);private data=inject(TripDataService);private route=inject(ActivatedRoute);private router=inject(Router);
 code=this.route.snapshot.paramMap.get('tripCode');error='';saving=false;loading=!!this.code;
 form=this.fb.nonNullable.group({code:['',[Validators.required,Validators.pattern(/^[A-Za-z0-9_-]+$/)]],name:['',Validators.required],length:['',Validators.required],start:['',Validators.required],resort:['',Validators.required],perPerson:['',[Validators.required,Validators.pattern(/^\d+(\.\d{1,2})?$/)]],image:['reef1.jpg',Validators.required],description:['',Validators.required]});
 ngOnInit(){if(this.code){this.data.getTrip(this.code).subscribe({next:trip=>{this.form.patchValue({...trip,start:trip.start.slice(0,10)});this.form.controls.code.disable();this.loading=false;},error:err=>{this.error=err.error?.message||'Could not load trip';}});}}
 submit(){if(this.form.invalid||this.saving||this.loading){this.form.markAllAsTouched();return;}this.saving=true;this.error='';const trip=this.form.getRawValue();const request=this.code?this.data.updateTrip(this.code,trip):this.data.addTrip(trip);request.subscribe({next:()=>this.router.navigate(['/'],{queryParams:{message:this.code?'Trip updated successfully':'Trip added successfully'}}),error:err=>{this.error=err.error?.message||'Save failed';this.saving=false;}});}
}
