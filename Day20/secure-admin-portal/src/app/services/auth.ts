import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isAuthenticated: boolean = false;

  constructor() {
    this.isAuthenticated = !!localStorage.getItem('authToken');
  }

  login(
    username: string,
    password: string
  ): boolean {
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      localStorage.setItem('authToken', 'fake-jwt-token');

      localStorage.setItem('role', 'admin');
      return true;
    }
    return false;
  }

  logout() : void{
    this.isAuthenticated = false;

    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
  }

  isLoggedIn() : boolean{
    return this.isAuthenticated;
  }

  getToken() : string | null{
    return localStorage.getItem('authToken');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
