import { Injectable } from '@angular/core';
import { delay, Observable, of, retry, shareReplay } from 'rxjs';
import { Department } from '../../models/department.model';
import { Analytics } from '../../models/analytics.model';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  departments$ = of([
    {
      id: 1,
      name: 'IT'
    },
    {
      id: 2,
      name: 'HR'
    },
    {
      id: 3,
      name: 'Finance'
    }
  ]).pipe(

    delay(1000),

    shareReplay(1)

  );

  getDepartments(): Observable<Department[]> {
    return this.departments$;
  }
  getAnalytics(

    departmentId: number,

    days: number

  ): Observable<Analytics> {

    return of({

      totalEmployees: 120,

      activeEmployees: 95,

      totalProjects: 18

    })

      .pipe(

        delay(1500),

        retry(2)

      );

  }
}
