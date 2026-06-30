import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter-pipe';
import { PhonePipe } from '../../pipes/phonepipe';
import { HighlightPipe } from '../../pipes/highlightpipe';


@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, FilterPipe, PhonePipe, HighlightPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.scss',
})
export class PipesDemo {
  today = new Date();
  title = 'angular developer toolkit';

  price = 1234.56;

  completion = 0.87;

  largeNumber = 123456789;

  phone = '9876543210';

  searchText = '';

  highlightText = '';

  description =
    'Angular pipes are used to transform data inside templates.';

  products = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999
    },

    {
      id: 2,
      name: 'Desk Lamp',
      category: 'Furniture',
      price: 50
    },

    {
      id: 3,
      name: 'Keyboard',
      category: 'Electronics',
      price: 70
    },

    {
      id: 4,
      name: 'Office Chair',
      category: 'Furniture',
      price: 150
    }
  ]

  user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    role: 'Developer'
  };
}
