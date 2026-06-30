import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  constructor(public cartService: CartService) { }

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Headphones', price: 2000 },
    { id: 4, name: 'Laptop', price: 50000 },
    { id: 5, name: 'Phone', price: 20000 },
    { id: 6, name: 'Headphones', price: 2000 },
    { id: 7, name: 'Laptop', price: 50000 },
    { id: 9, name: 'Phone', price: 20000 },
    { id: 9, name: 'Headphones', price: 2000 }
  ];
  add(product: Product) {
    this.cartService.addToCart(product)
  }
}
