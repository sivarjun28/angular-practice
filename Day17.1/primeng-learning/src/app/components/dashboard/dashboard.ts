import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CardModule, ProgressBarModule, TagModule, ChartModule ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  revenueChart: any;
  salesChart: any;
  chartOptions: any;

  ngOnInit(): void {
    this.revenueChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue',
          data: [45000, 59000, 80000, 81000, 95000, 110000]
        }
      ]
    };


    this.salesChart = {
      labels: ['Products', 'Services', 'Support'],
      datasets: [
        {
          data: [45, 35, 20]
        }
      ]
    };

    this.chartOptions = {
      resposive: true,
      maintainAspectRatio: false
    };
  }
}
