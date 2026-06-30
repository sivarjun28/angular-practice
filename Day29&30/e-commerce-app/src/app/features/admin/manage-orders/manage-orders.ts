import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';

interface OrderRow {
  id: number;
  customer: string;
  total: number;
  items: number;
  status: string;
  date: string;
}

@Component({
  selector: 'app-manage-orders',
  standalone: true,
  imports: [CommonModule, LoadingSpinner],
  templateUrl: './manage-orders.html',
  styleUrl: './manage-orders.scss',
})
export class ManageOrders implements OnInit {
  loading = signal(true);

  orders = signal<OrderRow[]>([
    { id: 1001, customer: 'Mina Chen', total: 248, items: 3, status: 'Packed', date: '2026-06-30' },
    { id: 1002, customer: 'David Ortiz', total: 512, items: 5, status: 'Processing', date: '2026-06-30' },
    { id: 1003, customer: 'Sara Khan', total: 129, items: 1, status: 'Delivered', date: '2026-06-29' },
  ]);

  ngOnInit(): void {
    setTimeout(() => this.loading.set(false), 400);
  }

  deleteOrder(id: number) {
    this.orders.set(this.orders().filter((order) => order.id !== id));
  }
}
