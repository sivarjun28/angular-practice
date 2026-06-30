import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }
  getTotalPrice() {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }
}
