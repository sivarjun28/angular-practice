import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingService } from '../services/booking';
@Component({
  selector: 'app-booking-history',
  imports: [CommonModule],
  templateUrl: './booking-history.html',
  styleUrl: './booking-history.scss',
})
export class BookingHistory {
  bookings: any[] = []

  constructor(
    private bookingService: BookingService
  ) {
    this.bookings = bookingService.getBookings();
  }

  clear() {

    this.bookingService
      .clearBookings();

    this.bookings = [];

  }

}
