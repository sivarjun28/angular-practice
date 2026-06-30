import { Component, signal } from '@angular/core';
import { BookingForm } from './booking-form/booking-form';
import { BookingHistory } from './booking-history/booking-history';

@Component({
  selector: 'app-root',
  imports: [BookingForm, BookingHistory],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('forms-booking');
}
