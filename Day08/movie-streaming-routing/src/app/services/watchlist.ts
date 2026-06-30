import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {

  watchlist: any[] = [];

  addTowatchlist(movie: any) {
    const exists = this.watchlist.find(
      item => item.id == movie.id
    );

    if (!exists) {
      this.watchlist.push(movie);
    }
  }

  removeMovie(id: number) {
    this.watchlist = this.watchlist.filter(
      movie => movie.id !== id
    );
  }

  getWatchlist() {
    return this.watchlist;
  }
}
