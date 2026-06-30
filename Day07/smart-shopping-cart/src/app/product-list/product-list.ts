import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Cart } from '../services/cart';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = [

    {

      name: 'MacBook Pro',
      price: 145000,
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310'
    },

    {
      name: 'iPhone 15',
      price: 85000,
      image:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'
    },

    {
      name: 'Sony Headphones',
      price: 12000,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
    },

    {
      name: 'Smart Watch',
      price: 18000,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
    }

  ];

  constructor(
    public cart: Cart
  ) {

  }

  addProduct(product: any) {
    this.cart.addToCart(product)
  }
}
