import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { OrderSummary } from '../order-summary/order-summary';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, OrderSummary],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss',
})
export class CheckoutForm {
  name = '';
  address = '';
  payment = 'cod';

  constructor(
    public cart: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  placeOrder() {
    if (!this.name || !this.address) {
      alert('Please fill all fields');
      return;
    }

    const itemsCopy = this.cart.items().map(item => ({ ...item }));
    const order = {
      items: itemsCopy,
      subtotal: this.cart.total(),
      tax: this.cart.tax(),
      total: this.cart.total() + this.cart.tax()
    };

    this.orderService.setOrder(order);

    this.cart.clearCart();
    this.cart.saveToStorage();
  }
}
