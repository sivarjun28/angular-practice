import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
 
} 
@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  searchText: string = '';
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 30, category: 'Category A' },
    { id: 4, name: 'Product 4', price: 40, category: 'Category C' },
    { id: 5, name: 'Product 5', price: 50, category: 'Category B' },
    
  ];
}
