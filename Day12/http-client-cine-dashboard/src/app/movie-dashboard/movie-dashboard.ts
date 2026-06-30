import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-dashboard.html',
  styleUrl: './movie-dashboard.scss',
})
export class MovieDashboard implements OnInit {
  movies: any[] = [];

  loading = true;

  editMode = false;

  selectMovieId = 0;

  movieData = {
    title: '',
    body: ''
  }
  constructor(
    private api: Api
  ) {

  }
  ngOnInit(): void {
    this.fetchMovies();
  }
  fetchMovies() {
    this.loading = true;

    this.api
      .getMovies()
      .subscribe({
        next: (data) => {
          this.movies = data.slice(0, 12);
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        }
      });

  }

  addMovie() {
    this.api
      .addMovie(this.movieData)
      .subscribe({
        next: (res) => {
          this.movies.unshift(res);
          this.movieData = {
            title: '',
            body: ''
          };

          alert('Movie Added')
        }
      });
  }

  editMovie(movie: any) {
    this.editMode = true;
    this.selectMovieId = movie.id;

    this.movieData = {
      title: movie.title,
      body: movie.body
    };
  }

  updateMovie() {
    this.api.updateMovie(
      this.selectMovieId,
      this.movieData
    ).subscribe({
      next: (res) => {
        const index = this.movies.findIndex(
          movie => movie.id === this.selectMovieId
        );

        this.movies[index] = {
          ...res
        };

        this.editMode = false;

        this.movieData = {
          title: '',
          body: ''
        }

        alert("Movie Updated")
      }
    })
  }

  patchMovie(movie: any) {
    this.api
      .patchMovie(movie.id,
        {
          title: 'Trending Movie'
        }
      )
      .subscribe({
        next: (res) => {
          movie.title =
            res.title

          alert("Movie Patched")
        }
      });
  }

  deleteMovie(id: number) {
    this.api
      .deleteMovie(id)
      .subscribe({
        next: () => {
          this.movies = this.movies.filter(
            movie => movie.id !== id
          );
          alert("Movie Deleted")
        }
      });

  }
}
