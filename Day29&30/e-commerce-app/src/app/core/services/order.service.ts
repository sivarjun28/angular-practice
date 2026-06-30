import { Injectable, signal } from '@angular/core';
import { CartItem } from './cart.service';

export interface Order {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {

  order = signal<Order | null>(null);

  setOrder(order: Order) {
    this.order.set(order);
  }

  getOrder() {
    return this.order();
  }

  clearOrder() {
    this.order.set(null);
  }
}