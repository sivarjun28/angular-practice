import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-orders.html',
   styleUrl: './manage-orders.scss'
})
export class ManageOrders {

  orders = signal<any[]>([
    { id: 1, user: 'Arjun', total: 120 },
    { id: 2, user: 'John', total: 300 }
  ]);

  deleteOrder(id: number) {
    this.orders.set(
      this.orders().filter(o => o.id !== id)
    );
  }
}