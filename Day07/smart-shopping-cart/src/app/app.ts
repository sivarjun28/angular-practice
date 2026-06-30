import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CartC } from './cart/cart';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, CartC],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('smart-shopping-cart');
}
