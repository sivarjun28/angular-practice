import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../register/register';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, Register],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService,
    private router: Router
  ) { }

  login() {
    if (!this.email || !this.password) {
      this.error = "please fill all the fields"
      return;
    }

    const success = this.auth.login(this.email, this.password);

    if(success){
      this.router.navigate(['./products']);
    }else{
      this.error = 'Invalid credentials'
    }
  }
}
