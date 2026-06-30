import { Component, computed, OnInit, signal } from '@angular/core';
import { CartService, Product } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductFilter } from '../product-filter/product-filter';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format-pipe';
import { FilterPipe } from '../../../shared/pipes/filter-pipe';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule, ProductFilter, CurrencyFormatPipe, FilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  products = signal<Product[]>([]);
  categories = signal<string[]>([]);
  loading = signal(true);
  error = signal('');

  searchTerm = signal('');
  selectedCategory = signal('');
  maxPrice = signal(1000);

  filteredProducts = computed(() => {
    console.log("FILTER RUNNING:", this.maxPrice());

    return this.products().filter(product => {
      return (
        product.title.toLowerCase().includes(this.searchTerm().toLowerCase()) &&
        (this.selectedCategory() === '' || product.category === this.selectedCategory()) &&
        product.price <= this.maxPrice()
      );
    });
  });

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log("products fetching...")
        this.products.set(products);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load products')
        this.loading.set(false)
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => this.categories.set(categories)
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartService.saveToStorage();
  }
}
