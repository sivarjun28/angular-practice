import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [

    {
      id: 1,
      title: 'Interstellar',
      category: 'SciFi',
      rating: 9.2,
      image:
      'assets/movies/interstellar.jpg',
      description:
      'Space exploration movie.'
    },

    {
      id: 2,
      title: 'Joker',
      category: 'Drama',
      rating: 8.9,
      image:
      'assets/movies/joker.jpg',
      description:
      'Psychological thriller.'
    },

    {
      id: 3,
      title: 'KGF',
      category: 'Action',
      rating: 8.7,
      image:
      'assets/movies/kgf.jpg',
      description:
      'Mass action entertainer.'
    }

  ];

  getMovies(){

    return this.movies;
  }

  getMovieById(id: number){
    return this.movies.find(
      movie => movie.id === id
    )
  }
}