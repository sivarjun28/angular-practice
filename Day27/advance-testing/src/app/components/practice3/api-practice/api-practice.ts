import { Component } from '@angular/core';
import { Api } from '../../../services/api';

@Component({
  selector: 'app-api-practice',
  imports: [],
  templateUrl: './api-practice.html',
  styleUrl: './api-practice.scss',
})
export class ApiPractice {
  users: any[] = [];
  loading = false;
  error = '';
  constructor(
    private api: Api
  ) { }

  loadUsers() {
    this.loading = true;
    this.error = '';
    this.users = [];
    this.api.getUsers()
      .subscribe({
        next: data => {
          this.users = data;
          this.loading = false;
        },
        error: err => {
          this.error = err.message;
          this.loading = false;
        }
      });
  }
}
