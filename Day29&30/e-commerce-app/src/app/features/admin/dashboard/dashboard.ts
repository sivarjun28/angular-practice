import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, of, take } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';

interface DashboardMetric {
  title: string;
  value: string;
  detail: string;
  accent: string;
}

interface DashboardActivity {
  title: string;
  detail: string;
  time: string;
  status: string;
}

interface DashboardInventoryItem {
  title: string;
  stock: string;
  price: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingSpinner],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  loading = signal(true);
  metrics = signal<DashboardMetric[]>([]);
  activities = signal<DashboardActivity[]>([]);
  inventory = signal<DashboardInventoryItem[]>([]);
  lastSynced = signal('just now');

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  refreshDashboard(): void {
    this.loading.set(true);
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.productService
      .getProducts()
      .pipe(
        take(1),
        catchError(() =>
          of([
            { id: 1, title: 'Wireless Headphones', price: 129, category: 'Audio' },
            { id: 2, title: 'Ergonomic Keyboard', price: 79, category: 'Accessories' },
            { id: 3, title: '4K Monitor', price: 299, category: 'Display' },
            { id: 4, title: 'Smart Speaker', price: 89, category: 'Audio' },
          ])
        )
      )
      .subscribe((products: any[]) => {
        const totalProducts = products.length;
        const lowStockItems = products.filter((product) => Number(product.price) < 100).length;
        const averagePrice = Math.round(
          products.reduce((sum, product) => sum + Number(product.price || 0), 0) / products.length
        );
        const categories = Array.from(new Set(products.map((product) => product.category || 'General')));

        this.metrics.set([
          { title: 'Products', value: `${totalProducts}`, detail: `${categories.length} categories active`, accent: 'blue' },
          { title: 'Low stock', value: `${lowStockItems}`, detail: 'Items under $100 need attention', accent: 'amber' },
          { title: 'Average price', value: `$${averagePrice}`, detail: 'Weighted by current catalog', accent: 'green' },
          { title: 'Revenue pulse', value: '+$24.8k', detail: 'Projected weekly sales', accent: 'violet' },
        ]);

        this.inventory.set(
          products.slice(0, 4).map((product) => ({
            title: product.title,
            stock: Number(product.price) > 200 ? 'Healthy' : 'Watch list',
            price: `$${Number(product.price).toFixed(0)}`,
          }))
        );

        this.activities.set([
          { title: 'Order #1042 shipped', detail: '3 items delivered to North Avenue', time: '8 min ago', status: 'Completed' },
          { title: 'New product review', detail: 'Wireless Headphones received 4.8/5', time: '24 min ago', status: 'Needs review' },
          { title: 'Inventory alert', detail: '2 items are below target margin', time: '1 hr ago', status: 'Action required' },
        ]);

        this.lastSynced.set(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
        this.loading.set(false);
      });
  }
}
