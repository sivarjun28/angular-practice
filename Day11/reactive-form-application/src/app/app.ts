import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplication } from './job-application/job-application';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobApplication],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('reactive-form-application');
}
