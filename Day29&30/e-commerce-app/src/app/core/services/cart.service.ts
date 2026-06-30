import { S } from '@angular/cdk/keycodes';
import { computed, Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  items = this.cartItems.asReadonly();

  itemCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  subTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0));

  tax = computed(() => this.subTotal() * 0.1)

  total = computed(() => this.subTotal() + this.tax());

  addToCart(product: Product): void {
    const existingItem = this.cartItems().find(item => item.id === product.id);

    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);

    } else {
      this.cartItems.update(items => [...items, { ...product, quantity: 1 }])
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartItems.update(items =>
      items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }
  clearCart(): void {
    this.cartItems.set([]);
  }

  loadFromStorage(): void {
    const saved = localStorage.getItem('cart');

    if (saved) {
      this.cartItems.set(JSON.parse(saved));
    }
  }

  saveToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }
}
