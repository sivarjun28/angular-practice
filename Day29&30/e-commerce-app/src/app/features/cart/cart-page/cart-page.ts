import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink, CartItem],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  constructor(public cart: CartService) { }

  remove(id: number) {
    this.cart.removeFromCart(id);
    this.cart.saveToStorage();
  }
}
