import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/dataService';
import { StatsCard } from '../stats-card/stats-card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, CommonModule, StatsCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats$;

  constructor(private dataService: DataService) {
    this.stats$ = this.dataService.stats$;
  }
}