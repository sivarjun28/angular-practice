import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  productImage: string =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff';

  productName: string = 'Nike Running Shoes';

  price: number = 4999;

  rating: number[] = [1, 2, 3, 4, 5];

  addToCart() {
    alert('Product Added To Cart');
  }
}
