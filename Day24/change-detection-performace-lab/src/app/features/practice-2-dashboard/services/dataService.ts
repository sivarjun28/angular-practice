import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private stasSubject = new BehaviorSubject({
    users: 100,
    sales: 200,
    products: 1000,
    orders: 65,
    customers: 999
  });

  stats$ = this.stasSubject.asObservable();

  constructor() {
    setInterval(() => {
      const current = this.stasSubject.value;
      this.stasSubject.next({
        users: current.users + Math.floor(Math.random() * 10),
        sales: current.sales + Math.floor(Math.random() * 20),
        products: current.products + Math.floor(Math.random() * 20),
        customers: current.customers + Math.floor(Math.random() * 20),
        orders: current.orders + Math.floor(Math.random() * 20)
      });
    }, 3000);
  }
}
