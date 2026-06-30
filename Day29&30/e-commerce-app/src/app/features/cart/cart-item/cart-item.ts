import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem as CartItemModel, CartService } from '../../../core/services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:'cart-item.html' ,
  styleUrl: 'cart-item.scss'
})
export class CartItem {

  @Input() item!: CartItemModel;

  constructor(private cart: CartService) {}

  increase() {
    this.cart.updateQuantity(this.item.id, this.item.quantity + 1);
    this.cart.saveToStorage();
  }

  decrease() {
    this.cart.updateQuantity(this.item.id, this.item.quantity - 1);
    this.cart.saveToStorage();
  }

  remove() {
    this.cart.removeFromCart(this.item.id);
    this.cart.saveToStorage();
  }
}