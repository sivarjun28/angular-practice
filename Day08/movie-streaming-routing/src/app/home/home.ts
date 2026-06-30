import { Component } from '@angular/core';
import { Movie } from '../services/movie';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  featuredMovies: any[] = [];
  trendingMovies: any[] = [];

  constructor(

    private movieService:
      Movie

  ) {

    this.featuredMovies =
      this.movieService
        .getMovies();

    this.trendingMovies =
      this.movieService
        .getTrendingMovies();
  }
}
