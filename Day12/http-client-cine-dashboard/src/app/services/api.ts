import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Injectable({
  providedIn: 'root',
})
export class Api {

  movieApi = 'https://jsonplaceholder.typicode.com/posts'
  usersApi = 'https://jsonplaceholder.typicode.com/users'

  constructor(
    private http: HttpClient
  ) {

  }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(
      this.movieApi
    )
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get(
      `${this.movieApi}/${id}`
    );

  }




  deleteMovie(id: Number): Observable<any> {
    return this.http.delete(
      `${this.movieApi}/${id}`
    )
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post(
      this.movieApi, movie
    )
  }

  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(
      `${this.movieApi}/${id}`, movie
    )
  }

  patchMovie(id: number, data: any): Observable<any> {
    return this.http.patch(
      `${this.movieApi}/${id}`, data
    )
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(
      this.usersApi
    )
  }

  addUser(user: any): Observable<any> {
    return this.http.post(
      this.usersApi, user
    )
  }
  getUserById(id: number): Observable<any> {
    return this.http.get(
      `${this.usersApi}/${id}`
    )
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `${this.usersApi}/${id}`
    )
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(
      `${this.usersApi}/${id}`, user
    )
  }
  patchUser(id: number, data: any): Observable<any> {
    return this.http.put(
      `${this.usersApi}/${id}`, data
    )
  }
}
