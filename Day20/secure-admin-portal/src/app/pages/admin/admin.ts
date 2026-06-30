import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  adminName = 'Administrator';

  stats = [

    {

      title: 'Total Users',

      value: 1250,

      icon: '👥'

    },

    {

      title: 'Total Orders',

      value: 342,

      icon: '📦'

    },

    {

      title: 'Reports',

      value: 28,

      icon: '📊'

    },

    {

      title: 'Active Sessions',

      value: 52,

      icon: '🟢'

    }

  ];

  constructor( 
    private router : Router
  ) {
  }

  goDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
