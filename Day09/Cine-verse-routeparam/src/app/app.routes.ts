import { Routes } from '@angular/router';

import { Movies } from './movies/movies';

import { MovieDetails }
from './movie-details/movie-details';

export const routes: Routes = [

  {
    path: '',
    component: Movies
  },

  {
    path:
    'movie/:id/:category',

    component:
    MovieDetails
  }

];