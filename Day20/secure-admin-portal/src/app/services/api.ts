import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getUsers():

    Observable<any> {

    return this.http.get(

      `${this.apiUrl}/users`

    );
  } 
  getPosts():

    Observable<any> {

    return this.http.get(

      `${this.apiUrl}/posts`

    );
  }
}
