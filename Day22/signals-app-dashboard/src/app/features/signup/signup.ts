import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  username = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  isEmailValid = computed(() =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(this.email()));

  isPasswordMatch = computed(() =>
    this.password() ===
    this.confirmPassword()
  )
  isFormValid = computed(() =>
    this.username().trim() !== '' &&
    this.isEmailValid() &&
    this.password().length >= 6 &&
    this.isPasswordMatch()
  )

  updateUsername(event: Event) {
    this.username.set(
      (event.target as HTMLInputElement).value
    )
  }

  updateEmail(event : Event){
    this.email.set(
      (event.target as HTMLInputElement).value
    );
  }

  updatePassword(event : Event){
    this.password.set(
      (event.target as HTMLInputElement).value
    )
  }

  updateConfirmPassword(event: Event) {
    this.confirmPassword.set(
      (event.target as HTMLInputElement).value
    )
  }

  submitForm(){
    alert('Registration Successful');
  }
}
