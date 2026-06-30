import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchResult } from '../../models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class Search {
  private readonly baseUrl = 'https://dummyjson.com/users/search';

  constructor(private http: HttpClient) {

  }
  search(searchTerm: string): Observable<SearchResult[]> {
    return this.http.get<any>(
      `${this.baseUrl}?q=${searchTerm}`
    )
      .pipe(map(response => response.users))
  }
}
