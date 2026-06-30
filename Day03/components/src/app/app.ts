import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';
import { NavigationMenu } from './navigation-menu/navigation-menu';
import { TodoItem } from './todo-item/todo-item';
import { Profile } from './profile/profile';
import { WeatherWidget } from './weather-widget/weather-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard, NavigationMenu, TodoItem, Profile, WeatherWidget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('components');
}
