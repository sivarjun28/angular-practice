import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DashboardStats {
  label: string;
  value: number;
  icon: string;
  color: string;
}


@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard implements OnInit {
  stats: DashboardStats[] = [];

  recentActivities: string[] = [];

  ngOnInit(): void {
    this.loadStats();
    this.loadRecentActivities();
  }
  loadStats() {
    this.stats = [
      {
        label: 'Total users',
        value: 1234,
        icon: '👥',
        color: '#1976d2'
      },
      {
        label: 'Products',
        value: 156,
        icon: '🛒',
        color: '#4caf50'
      },
      {
        label: 'Orders',
        value: 567,
        icon: '📦',
        color: '#ff9800'
      },
      {
        label: 'Revenue',
        value: 8678,
        icon: '💰',
        color: '#9c27b0'
      }
    ];

  }
  loadRecentActivities() {
    this.recentActivities = [
      'New user registered',
      'Product "Laptop" added',
      'Order #1024 completed',
      'Admin updated settings',
      'Product stock updated'
    ];
  }
}
