import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchTerm = signal('');

  products = signal([

    'Laptop',

    'Mouse',

    'Keyboard',

    'Monitor',

    'Headphones',

    'Mobile',

    'Speaker',

    'Tablet'

  ]);

  filteredProducts = computed(() => {

    const term =

      this.searchTerm()

        .toLowerCase();

    return this.products()

      .filter(product =>

        product

          .toLowerCase()

          .includes(term)

      );

  });

}
