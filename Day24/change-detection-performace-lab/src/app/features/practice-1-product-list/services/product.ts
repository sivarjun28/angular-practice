import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  getProducts(): Product[] {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 1000)
    }))
  }

}
