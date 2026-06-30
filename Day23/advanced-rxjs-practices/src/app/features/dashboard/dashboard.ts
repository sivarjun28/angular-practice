import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../core/services/dashboard';
import { catchError, finalize, forkJoin, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  loading = false;

  error = '';

  profile: any;

  posts: any[] = [];

  notifications: any[] = [];

  statistics: any;

  constructor(
    private dashboardService: Dashboard
  ) { }

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;

    this.error = '';

    forkJoin({
      profile: this.dashboardService.getUserProfile(),

      posts: this.dashboardService.getRecentPosts(),

      notifications: this.dashboardService.getNotifications(),

      statistics: this.dashboardService.getStatistics()
    })

      .pipe(
        tap(() => {
          console.log('loading dashboard')
        }),
        catchError(() => {
          this.error = 'unable to load dashboard';
          return of(null);
        }),

        finalize(() => {
          this.loading = false;
        })
      ).subscribe(data => {
        if (!data) {
          return;
        }

        this.profile = data.profile;
        this.posts = data.posts;
        this.notifications = data.notifications;
        this.statistics = data.statistics;
      })
  }
}
