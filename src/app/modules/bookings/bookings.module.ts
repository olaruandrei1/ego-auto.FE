import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './component/bookings.component';



@NgModule({
  imports: [
    CommonModule,
    BookingsRoutingModule,
    BookingsComponent
  ]
})
export class BookingsModule { }
