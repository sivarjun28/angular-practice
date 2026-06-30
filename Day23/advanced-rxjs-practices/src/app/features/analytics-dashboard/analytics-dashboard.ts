import { Component, OnInit } from '@angular/core';
import { catchError, combineLatest, EMPTY, finalize, Subject, switchMap, tap } from 'rxjs';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  imports: [],
  templateUrl: './analytics-dashboard.html',
  styleUrl: './analytics-dashboard.scss',
})
export class AnalyticsDashboard implements OnInit {

  loading = false;

  error = '';

  departments: any[] = [];

  analytics: any;

  departmentSubject =

    new Subject<number>();

  dateSubject =

    new Subject<number>();

  constructor(

    private analyticsService:

      AnalyticsService

  ) { }

  ngOnInit(): void {

    this.loadDepartments();

    this.initializeFilters();

  }

  loadDepartments(): void {

    this.analyticsService

      .getDepartments()

      .subscribe(data => {

        this.departments = data;

      });

  }

  initializeFilters(): void {

    combineLatest([

      this.departmentSubject,

      this.dateSubject

    ])

      .pipe(

        tap(() => {

          this.loading = true;

          this.error = '';

        }),

        switchMap(

          ([departmentId, days]) =>

            this.analyticsService

              .getAnalytics(

                departmentId,

                days

              )

        ),

        catchError(() => {

          this.error =

            'Unable to load analytics';

          return EMPTY;

        }),

        finalize(() => {

          this.loading = false;

        })

      )

      .subscribe(data => {

        this.analytics = data;

        this.loading = false;

      });

  }

  onDepartmentChange(

    event: any

  ): void {

    this.departmentSubject.next(

      Number(event.target.value)

    );

  }

  onDateChange(

    event: any

  ): void {

    this.dateSubject.next(

      Number(event.target.value)

    );

  }

}
