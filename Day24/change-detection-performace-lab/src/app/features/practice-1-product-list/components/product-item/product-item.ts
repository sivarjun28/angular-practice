import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
  @Input() product!: Product;
  @Output() buy = new EventEmitter<Product>();

  buyProduct() {
    this.buy.emit(this.product)
  }
} 
