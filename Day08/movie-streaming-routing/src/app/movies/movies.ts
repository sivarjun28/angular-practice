import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
import { WatchlistService } from '../services/watchlist';
@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {

  movies: any[] = [];

  constructor(

    private movieService: Movie,

    private watchlistService:
      WatchlistService

  ) {

    this.movies =
      this.movieService.getMovies();
  }
  addMovie(movie: any) {
    this.watchlistService.addTowatchlist(movie);
  }
}
