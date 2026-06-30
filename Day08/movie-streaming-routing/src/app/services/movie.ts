import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  movies = [
    {
      id: 1,
      title: 'Interstellar',
      category: 'Sci-Fi',
      rating: 9.2,
      image:
        'assets/movies/interstellar.jpg'
    },

    {
      id: 2,
      title: 'Joker',
      category: 'Drama',
      rating: 8.8,
      image:
        'assets/movies/joker.jpg'
    },

    {
      id: 3,
      title: 'Avengers Endgame',
      category: 'Action',
      rating: 9.0,
      image:
        'assets/movies/endgame.jpg'
    },

    {
      id: 4,
      title: 'Dark knight',
      category: 'Action',
      rating: 8.7,
      image:
        'assets/movies/dark-knight.jpg'
    }
  ];
  trendingMovies = [
     {
      title: 'Pushpa 2',
      image: 'assets/movies/pushpa2.jpg',
      description: 'Most Watched'
    },

    {
      title: 'KGF',
      image: 'assets/movies/kgf.jpg',
      description: 'Top Rated'
    },

    {
      title: 'Salaar',
      image: 'assets/movies/salaar.jpg',
      description: 'Fan Favorite'
    }
  ]
  getMovies(){
    return this.movies;
  }

  getTrendingMovies(){
    return this.trendingMovies;
  }
}
