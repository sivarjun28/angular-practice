import { Component, signal } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  couponCode = signal('');
  discountTotal = signal<number | null>(null);

  constructor(public cartService : CartService){}

  applyCoupon(){
    const total = this.cartService.applyCoupon(this.couponCode());
    this.discountTotal.set(total);
  }
}
