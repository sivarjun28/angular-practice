import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  dashboardData = [
    {
      title: 'Products',

      count: 10
    },

    {
      title: 'Todos',

      count: 5
    },

    {
      title: 'Blogs',

      count: 21
    },

    {
      title: 'Cart',

      count: 3
    }
  ]
}
