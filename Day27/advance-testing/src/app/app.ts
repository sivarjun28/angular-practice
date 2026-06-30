import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/practice1/todo/todo';
import { FormValidation } from './components/practice2/form-validation/form-validation';
import { ApiPractice } from './components/practice3/api-practice/api-practice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, FormValidation, ApiPractice],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('advance-testing');
}
