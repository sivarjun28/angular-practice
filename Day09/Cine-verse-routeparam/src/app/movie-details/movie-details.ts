import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../services/movie';
@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit{
  movie: any;
  movieId : number = 0;
  category: string = '';

  constructor(
    private route : ActivatedRoute,

    private movieSerivce : MovieService,

    private location : Location
  ){

  }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe(params => {
          this.movieId = Number(
            params.get('id')
          );

          this.category = 
            params.get('category')
            || '';

            this.movie = this.movieSerivce
                .getMovieById(
                  this.movieId
                );
        });
        
  }
  goBack(){
    this.location.back();
  }
}
