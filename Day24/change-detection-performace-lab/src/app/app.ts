import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './features/practice-1-product-list/components/product-list/product-list';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('change-detection-performace-lab');
}
