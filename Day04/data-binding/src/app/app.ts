import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toggle } from './toggle/toggle';
import { TemperatureConverter } from './temperature-converter/temperature-converter';
import { FormValidator } from './form-validator/form-validator';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';
import { TodoInput } from './todo-input/todo-input';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toggle, TemperatureConverter, FormValidator, ThemeSwitcher, TodoInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('data-binding');
}
