import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-validation.html',
  styleUrl: './form-validation.scss',
})
export class FormValidation {

  form;

  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
    }
  }

  reset() {
    this.form.reset();
  }
}
