import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { catchError, EMPTY, finalize, mergeMap, Subject, tap } from 'rxjs';
import { InfiniteScroll } from '../../core/services/infinite-scroll';

@Component({
  selector: 'app-infinite-scroll',
  imports: [CommonModule],
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.scss',
})
export class InfiniteScrollComponent {

  products: any[] = [];

  pageSubject = new Subject<number>();

  loading = false;

  error = '';

  skip = 0;

  limit = 10;

  constructor(
    private infiniteService: InfiniteScroll
  ) { }

  ngOnInit(): void {

    this.initialize();

    this.loadMore();

  }

  initialize(): void {

    this.pageSubject

      .pipe(

        tap(() => {

          this.loading = true;

        }),

        mergeMap(skip =>

          this.infiniteService

            .getProducts(skip)

            .pipe(

              catchError(() => {

                this.error =

                  'Unable to load products';

                return EMPTY;

              }),

              finalize(() => {

                this.loading = false;

              })

            )

        )

      )

      .subscribe(data => {

        this.products = [

          ...this.products,

          ...data

        ];

      });

  }

  loadMore(): void {

    this.pageSubject.next(

      this.skip

    );

    this.skip += this.limit;

  }

  @HostListener('window:scroll')

  onScroll(): void {

    const position =

      window.innerHeight +

      window.scrollY;

    const height =

      document.body.offsetHeight;

    if (

      position >= height - 100

    ) {

      this.loadMore();

    }

  }
}
