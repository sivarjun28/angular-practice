import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Company } from '../models/company.model';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getUser(): Observable<User> {
    return of({
      id: 1,
      name: 'John',
      companyId: 101
    })
      .pipe(
        delay(1000)
      );
  }

  getCompany(companyId: number): Observable<Company> {
    return of({
      id: companyId,
      companyName: 'OpenAi',
      locationId: 1001
    })
      .pipe(delay(1000));
  }

  getLocation(
    locationId: number
  ): Observable<Location> {
    return of({
      id: locationId,
      city: 'Bangalore',
      country: 'India'
    })
      .pipe(delay(1000));
  }
}
