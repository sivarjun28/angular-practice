import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';

interface ProductRow {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinner],
  templateUrl: './manage-products.html',
  styleUrl: './manage-products.scss',
})
export class ManageProducts implements OnInit {
  loading = signal(true);

  products = signal<ProductRow[]>([
    { id: 1, title: 'Wireless Headphones', category: 'Audio', price: 129, stock: 24, status: 'In stock' },
    { id: 2, title: 'Ergonomic Keyboard', category: 'Accessories', price: 79, stock: 8, status: 'Low stock' },
    { id: 3, title: '4K Monitor', category: 'Display', price: 299, stock: 15, status: 'In stock' },
  ]);

  newProduct = { title: '', category: 'Accessories', price: 0, stock: 0 };

  ngOnInit(): void {
    setTimeout(() => this.loading.set(false), 400);
  }

  addProduct() {
    if (!this.newProduct.title || this.newProduct.price <= 0) return;

    const updated = [
      ...this.products(),
      {
        ...this.newProduct,
        id: Date.now(),
        status: this.newProduct.stock > 0 ? 'In stock' : 'Out of stock',
      },
    ];

    this.products.set(updated);
    this.newProduct = { title: '', category: 'Accessories', price: 0, stock: 0 };
  }

  deleteProduct(id: number) {
    this.products.set(this.products().filter((product) => product.id !== id));
  }
}
