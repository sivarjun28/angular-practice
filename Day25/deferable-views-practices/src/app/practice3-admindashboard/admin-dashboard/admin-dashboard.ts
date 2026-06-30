import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, ChartModule, TableModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  isAdmin = true;

  stats = {
    totalUsers: 1200,
    activeUsers: 860,
    newUsers: 50
  }

  chartData: any;

  users = [
    {name: 'Arjun', role: 'Admin'},
    {name: 'Johm', role:'User'},
    { name: 'Sara', role:'Editor'}
  ];

  constructor(){
    this.loadChart();
  }

  loadChart(){
    this.chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],

      datasets: [
        {
          label: 'Users Growth',
          data: [200, 400, 800, 1200]
        }
      ]
    }
  }
}
