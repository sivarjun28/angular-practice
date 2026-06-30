import { Component } from '@angular/core';
import { BookingService } from '../services/booking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {

  booking = {
    name: '',

    email: '',

    movie: '',

    tickets: 1,

    seatType: '',

    message: '',

    agree: false
  };

  submitted = false;
  movies = [
    'Pushpa 2',

    'KGF',

    'Salaar',

    'Leo'
  ]
  constructor(
    private bookingService: BookingService
  ) {

  }

  onSubmit(form: any) {
    this.submitted = true;

    this.bookingService
      .addBooking({
        ...this.booking
      });
    console.log(form.value);

    form.resetForm();

    this.booking = {

      name: '',

      email: '',

      movie: '',

      tickets: 1,

      seatType: '',

      message: '',

      agree: false
    };
  }
}
