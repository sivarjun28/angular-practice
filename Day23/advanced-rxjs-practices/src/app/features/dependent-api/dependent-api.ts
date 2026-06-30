import { Component, OnInit } from '@angular/core';
import { Employee } from '../../service/employee';
import { catchError, concatMap, EMPTY, finalize, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dependent-api',
  imports: [CommonModule],
  templateUrl: './dependent-api.html',
  styleUrl: './dependent-api.scss',
})
export class DependentApi implements OnInit {
  loading = false;
  error = '';
  user: any;
  company: any;
  location: any;
  constructor(private employeeService: Employee) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.loading = true;

    this.error = '';

    this.employeeService
      .getUser()
      .pipe(
        tap(user => {
          this.user = user;
        }),
        concatMap(user =>
          this.employeeService
            .getCompany(user.companyId)
        ),

        tap(company => {
          this.company = company;
        }),
        concatMap(company =>
          this.employeeService
            .getLocation(company.locationId)
        ),

        tap(location => {
          this.location = location
        }
        ),
        catchError(() => {
          this.error = "unable to load the data";
          return EMPTY
        }),
         finalize(() => {
          this.loading = false;
         })
      ).subscribe();
  }
}
