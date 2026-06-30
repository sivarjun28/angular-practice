import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDashboard } from './student-dashboard/student-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('student-dashboard-directives');
}
