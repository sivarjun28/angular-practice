import { JsonPipe } from '@angular/common';
import { Injectable, signal } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'user' | 'admin'
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser = signal<User | null>(null);
  user = this.currentUser.asReadonly();

  isAuthenticated = signal(false);
  isAdmin = signal(false);

  constructor(private router: Router) {
    this.loadUserFromStorage();
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const user: User = {
        id: 1,
        email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : 'user'
      };

      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      this.isAdmin.set(user.role === 'admin');

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'fake-jwt-token');

      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.isAdmin.set(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  private loadUserFromStorage(): void {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (savedUser && token) {
      const user: User = JSON.parse(savedUser);
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      this.isAdmin.set(user.role === 'admin');
    }
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
