import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../services/product';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  trackById(index: number, item: Product) {
    return item.id
  }

  onBuy(product: Product){
    console.log('Bought:', product)
  }

  updateFirst(){
    this.products = this.products.map(
      p => p.id === 0 ? {
        ...p, price: p.price + 100 } :p)
      }
    
  }
