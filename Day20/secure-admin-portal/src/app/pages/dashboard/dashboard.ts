import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  userName = 'Admin';
  searchText = '';

  stats = [

    {
      title: 'Users',
      value: 1250,
      icon: '👥'
    },

    {
      title: 'Orders',
      value: 342,
      icon: '📦'
    },

    {
      title: 'Revenue',
      value: '₹1.2L',
      icon: '💰'
    },

    {
      title: 'Tasks',
      value: 18,
      icon: '✅'
    }

  ];

  activities = [
    'User logged in',
    'Profile updated',
    'Order created',
    'API request completed',
    'Role Changed'
  ];

  constructor(private authService: Auth,
    private router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      console.log('Users:', data);
    })
  }

  logout() : void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openProfile() : void{
    this.router.navigate(['/profile']);
  }

  openAdmin() : void{
    this.router.navigate(['/admin']);
  }


}
