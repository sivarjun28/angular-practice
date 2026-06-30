import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MovieService }
from '../services/movie';

@Component({
  selector: 'app-movies',

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './movies.html',

  styleUrl: './movies.scss',
})
export class Movies {

  movies: any[] = [];

  constructor(

    private movieService:
    MovieService

  ){

    this.movies =
    this.movieService
    .getMovies();
  }
}