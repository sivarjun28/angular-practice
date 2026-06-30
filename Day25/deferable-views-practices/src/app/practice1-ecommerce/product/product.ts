import { Component } from '@angular/core';
import { Product, Review, QA } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
  product: Product = {
    name: 'iPhone 15',
    price: 80000,
    description: 'Latest Apple phone'
  }

  reviews: Review[] = [
    { user: 'Arjun', comment: "Great phone" },
    { user: 'Siva', comment: 'Worth for money' },
    { user: 'sumanth', comment: "beautiful phone" },
    { user: 'giri', comment: 'not worth for money' },
    { user: 'john', comment: "good" },
    { user: 'jones', comment: 'performace would be better' }];

  relatedProducts: string[] = [
    'Phone Case',
    'Charger',
    'AirPods'
  ];

  questions: QA[] = [
    {
      question: 'Battery life?',
      answer: '1 day usage'
    },
    {
      question: 'warrenty?',
      answer: '2 years'
    },
    {
      question: 'storage?',
      answer: '8gb ram & 256 rom'
    },
    {
      question: 'Processer?',
      answer: '1.9oct 678 snapdragon'
    }
  ]
}

