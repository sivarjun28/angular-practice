import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  name = '';
  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  register() {
    if (!this.name || !this.email || !this.password) {
      this.error = 'All fields required';
      return;
    }

    this.auth.login(this.email, this.password);

    this.router.navigate(['/products']);
  }
}