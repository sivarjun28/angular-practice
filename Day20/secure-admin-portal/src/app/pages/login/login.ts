import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) { }

  onLogin(): void {
    const isValidUser = this.auth.login(this.username, this.password);

    if (isValidUser) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
