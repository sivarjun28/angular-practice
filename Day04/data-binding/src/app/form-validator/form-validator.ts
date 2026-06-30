import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-validator.html',
  styleUrls: ['./form-validator.scss']
})
export class FormValidator {

  name: string = '';

  email: string = '';

  password: string = '';

  submitted: boolean = false;

  get isNameValid(): boolean {
    return this.name.trim().length >= 3;
  }

  get isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  get isPasswordValid(): boolean {
    return this.password.length >= 6;
  }

  get isFormValid(): boolean {
    return (
      this.isNameValid &&
      this.isEmailValid &&
      this.isPasswordValid
    );
  }

  register() {

    if (this.isFormValid) {

      this.submitted = true;

      alert('Registration Successful ✅');
    }
  }
}