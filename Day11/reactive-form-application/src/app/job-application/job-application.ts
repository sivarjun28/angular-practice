import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {

  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl

} from '@angular/forms';

@Component({
  selector: 'app-job-application',

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './job-application.html',

  styleUrls: ['./job-application.scss']
})
export class JobApplication {

  submitted = false;

  applicationForm = new FormGroup({

    firstName: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),                       

    lastName: new FormControl(
      '',
      Validators.required
    ),

    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),

    phone: new FormControl(
      '',
      [
        Validators.required,

        Validators.pattern(
          '^[0-9]{10}$'
        )
      ]
    ),

    age: new FormControl(
      '',
      [
        Validators.required,
        Validators.min(18),
        Validators.max(60)
      ]
    ),

    role: new FormControl(
      '',
      Validators.required
    ),

    experience: new FormControl(
      '',
      Validators.required
    ),

    skills: new FormControl(
      '',
      Validators.required
    ),

    portfolio: new FormControl(''),

    bio: new FormControl(
      '',
      Validators.maxLength(200)
    ),

    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),

    confirmPassword: new FormControl(
      '',
      Validators.required
    ),

    terms: new FormControl(
      false,
      Validators.requiredTrue
    )

  },
  {
    validators: this.passwordMatchValidator
  });

  passwordMatchValidator(
    control: AbstractControl
  ){

    const password =
      control.get('password')
      ?.value;

    const confirmPassword =
      control.get('confirmPassword')
      ?.value;

    if(
      password !== confirmPassword
    ){

      return {
        passwordMismatch: true
      };
    }

    return null;
  }

  onSubmit(){

    if(
      this.applicationForm.valid
    ){

      this.submitted = true;

      console.log(
        this.applicationForm.value
      );

      alert(
        'Application Submitted Successfully'
      );

    }else{

      this.applicationForm
      .markAllAsTouched();
    }
  }

  resetForm(){

    this.applicationForm.reset();

    this.submitted = false;
  }

}