import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('testing-basics-components');
}
