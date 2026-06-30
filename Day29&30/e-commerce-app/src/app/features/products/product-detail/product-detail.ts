import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService, Product } from '../../../core/services/cart.service';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format-pipe';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink, CurrencyFormatPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  product = signal<Product | null>(null);
  loading = signal(true);
  error = signal('');

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load product');
        this.loading.set(false);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartService.saveToStorage();
  }
}
