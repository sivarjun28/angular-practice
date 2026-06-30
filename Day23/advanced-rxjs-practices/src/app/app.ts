import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdvancedSearch } from './features/advanced-search/advanced-search';
import { DashboardComponent } from './features/dashboard/dashboard';
import { DependentApi } from './features/dependent-api/dependent-api';
import { InfiniteScrollComponent } from './features/infinite-scroll/infinite-scroll';
import { AnalyticsDashboard } from './features/analytics-dashboard/analytics-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdvancedSearch, DashboardComponent, DependentApi, InfiniteScrollComponent, AnalyticsDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('advanced-rxjs-practices');
}
