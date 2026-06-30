import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-products.html',
  styleUrl: './manage-products.scss'
})
export class ManageProducts {

  products = signal<any[]>([
    { id: 1, title: 'Phone', price: 500 },
    { id: 2, title: 'Laptop', price: 1200 }
  ]);

  newProduct = { title: '', price: 0 };

  addProduct() {
    if (!this.newProduct.title || !this.newProduct.price) return;

    const updated = [
      ...this.products(),
      { ...this.newProduct, id: Date.now() }
    ];

    this.products.set(updated);
    this.newProduct = { title: '', price: 0 };
  }

  deleteProduct(id: number) {
    this.products.set(
      this.products().filter(p => p.id !== id)
    );
  }
}