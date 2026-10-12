import {Component,Input,Output,EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Trip} from '../models/trip';
@Component({selector:'app-trip-card',imports:[CommonModule,RouterLink],templateUrl:'./trip-card.html'})
export class TripCardComponent { @Input({required:true}) trip!:Trip; @Output() remove=new EventEmitter<Trip>(); }
