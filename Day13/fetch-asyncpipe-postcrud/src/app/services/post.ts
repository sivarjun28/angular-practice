import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from '../Models/post.interface';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`).pipe(
      catchError(this.handleError)
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  getPostsByUserId(userId: Number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?userId = ${userId}`).pipe(
      catchError(this.handleError)
    )
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts`, post).pipe(
      catchError(this.handleError)
    )
  }

  updatePost(
    id: number,
    post: Partial<Post>
  ): Observable<Post> {

    return this.http.put<Post>(
      `${this.apiUrl}/posts/${id}`,
      post
    ).pipe(

      catchError(this.handleError)

    );

  }

  deletePost(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/posts/${id}`
    ).pipe(

      catchError(this.handleError)

    );

  }

  //Error Handling

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = 'Network error: Unable to connect to the server';
          break;
        case 400:
          errorMessage = 'Bad Request: Invalid data provided';
          break;
        case 404:
          errorMessage = 'Not Found: The requested resource does not exist';
          break;
        case 500:
          errorMessage = 'Server Error: Something went wrong on the server';
          break;
        default:
          errorMessage = `Server returned code ${error.status}: ${error.message}`;
      }
    }

    console.error('HTTP Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
