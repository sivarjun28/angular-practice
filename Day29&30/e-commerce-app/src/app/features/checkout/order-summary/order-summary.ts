import { Component, computed } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
   constructor(public orderService: OrderService) {}

   order = computed(() => this.orderService.getOrder());
}
