import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  catchError,
  retry,
  throwError
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Api {

  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {

    return this.http

      .get<any[]>(this.URL)

      .pipe(

        retry(2),

        catchError(() => {

          return throwError(

            () => new Error('Unable to fetch users')

          );

        })

      );

  }

}