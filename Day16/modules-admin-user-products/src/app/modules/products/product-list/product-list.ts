import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 65000,
      stock: 15
    },
    {
      id: 2,
      name: 'Smart Phone',
      category: 'Electronics',
      price: 35000,
      stock: 25
    },
    {
      id: 3,
      name: 'Headphones',
      category: 'Accessories',
      price: 2500,
      stock: 50
    },
    {
      id: 4,
      name: 'Smart Watch',
      category: 'Wearables',
      price: 8000,
      stock: 18
    }
  ];

}
