import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScroll {
  constructor(private http: HttpClient) { }

  getProducts(
    skip: number
  ): Observable<Product[]> {
    return this.http
      .get<any>(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      ).pipe(map(response => response.products))
  }
}
