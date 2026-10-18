import {Component,Input,Output,EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Trip} from '../models/trip';
import {inject} from '@angular/core';
import {AuthenticationService} from '../services/authentication';
@Component({selector:'app-trip-card',imports:[CommonModule,RouterLink],templateUrl:'./trip-card.html'})
export class TripCardComponent { auth=inject(AuthenticationService); @Input({required:true}) trip!:Trip; @Output() remove=new EventEmitter<Trip>(); }
