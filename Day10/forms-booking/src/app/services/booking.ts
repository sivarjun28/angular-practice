import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookings: any[] = [];

  addBooking(data: any) {
    this.bookings.push(data);
  }

  getBookings() {
    return this.bookings;
  }

  clearBookings() {
    this.bookings = [];
  }
}
