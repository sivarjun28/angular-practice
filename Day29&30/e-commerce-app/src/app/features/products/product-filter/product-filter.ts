import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss'
})
export class ProductFilter {

  @Input() categories: string[] = [];
  @Input() searchTerm: string = '';
  @Input() selectedCategory: string = '';
  @Input() maxPrice: number = 1000;

  @Output() searchTermChange = new EventEmitter<string>();
  @Output() selectedCategoryChange = new EventEmitter<string>();
  @Output() maxPriceChange = new EventEmitter<number>();

  onSearchChange(value: string) {
    this.searchTermChange.emit(value);
  }

  onCategoryChange(value: string) {
    this.selectedCategoryChange.emit(value);
  }

  onPriceChange(value: number) {
    this.maxPriceChange.emit(value);
  }
}