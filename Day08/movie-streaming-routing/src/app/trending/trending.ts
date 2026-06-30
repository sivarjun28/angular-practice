import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.html',
  styleUrl: './trending.scss',
})
export class Trending {

  trendingMovies: any[] = [];

  constructor(

    private movieService:
      Movie

  ) {


    this.trendingMovies =
      this.movieService
        .getTrendingMovies();
  }
}
