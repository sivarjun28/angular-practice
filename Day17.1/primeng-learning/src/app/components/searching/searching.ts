import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  status: string;

}

@Component({
  selector: 'app-searching',
  imports: [CommonModule, FormsModule, TableModule, ButtonModule, InputTextModule, TagModule, FileUploadModule],
  templateUrl: './searching.html',
  styleUrl: './searching.scss',
})
export class Searching {
  products: Product[] = [
    { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299, stock: 45, rating: 4.8, status: 'In Stock' },
    { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29, stock: 120, rating: 4.5, status: 'In Stock' },
    { id: 3, name: 'Mechanical Keyboard', category: 'Electronics', price: 159, stock: 8, rating: 4.9, status: 'Low Stock' },
    { id: 4, name: 'USB-C Hub', category: 'Accessories', price: 49, stock: 0, rating: 4.2, status: 'Out of Stock' },
    { id: 5, name: 'Monitor 27"', category: 'Electronics', price: 349, stock: 32, rating: 4.7, status: 'In Stock' },
    { id: 6, name: 'Desk Lamp LED', category: 'Office', price: 45, stock: 67, rating: 4.4, status: 'In Stock' },
    { id: 7, name: 'Webcam HD', category: 'Electronics', price: 79, stock: 15, rating: 4.3, status: 'In Stock' },
    { id: 8, name: 'Headphones Pro', category: 'Electronics', price: 199, stock: 3, rating: 4.9, status: 'Low Stock' }
  ]

  searchText: string = '';
  get filteredProducts(): Product[] {
    if (!this.searchText) {
      return this.products;
    }
    const search = this.searchText.toLowerCase();

    return this.products.filter(p =>
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search) ||
      p.status.toLowerCase().includes(search)
    )
  }

getStatusSeverity(status: string): 'success' | 'warn' | 'danger' {
    switch (status) {
      case 'In Stock': return 'success';
      case 'Low Stock': return 'warn';
      case 'Out of Stock': return 'danger';
      default: return 'success';
    }
  }
}
