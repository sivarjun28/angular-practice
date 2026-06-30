import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieDashboard } from './movie-dashboard/movie-dashboard';
import { UserDashboard } from './user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieDashboard, UserDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('http-client-cine-dashboard');
}
