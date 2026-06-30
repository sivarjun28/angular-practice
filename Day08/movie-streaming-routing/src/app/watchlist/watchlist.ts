import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../services/watchlist';
@Component({
  selector: 'app-watchlist',
  imports: [CommonModule],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.scss',
})
export class Watchlist {

  constructor(
    public watchlistService : WatchlistService
  ){
  }
}
