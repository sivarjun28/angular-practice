import { Component } from '@angular/core';
import { catchError, debounceTime,  distinctUntilChanged, EMPTY, filter, finalize, Subject, switchMap, tap } from 'rxjs';
import { SearchResult } from '../../models/search-result.model';
import { Search } from '../../core/services/search';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-search',
  imports: [CommonModule],
  templateUrl: './advanced-search.html',
  styleUrl: './advanced-search.scss',
})
export class AdvancedSearch {
  searchSubject = new Subject<string>();

  results: SearchResult[] = [];

  loading = false;

  error = '';

  placeholder = 'Search employees....';

  constructor(private searchService: Search) { }

  ngOnInit(): void {
    this.initializeSearch();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchSubject.next(
      input.value.trim()
    );
  }

  private initializeSearch(): void {
    this.searchSubject.pipe(
      debounceTime(300),

      filter(value => value.length >= 2),

      distinctUntilChanged(),

      tap(() => {
        this.loading = true;
        this.error = '';
      }),

      switchMap(searchTerm =>
        this.searchService.search(searchTerm)
          .pipe(catchError(() => {
            this.error = "unable to fetch data";
            return EMPTY
          }),
            finalize(() => {
              this.loading = false;
            })
          )
      )
    ).subscribe({
      next: data => {
        this.results = data
      }
    });
  }
}
