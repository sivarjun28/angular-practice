import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { Droppable } from 'primeng/dragdrop';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [
  CommonModule,
  ReactiveFormsModule,
  Droppable,
  ToastModule,
  SelectModule,
  CardModule,
  ButtonModule,
  CheckboxModule,

  InputTextModule,
  InputNumberModule,
  RadioButtonModule,
  PasswordModule,

  DatePickerModule 
],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-forms',
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  providers: [MessageService]
})
export class Forms implements OnInit {

  employeeForm!: FormGroup;
  departments = [{ name: 'IT', value: 'IT' },
  { name: 'HR', value: 'HR' },
  { name: 'Finance', value: 'Finance' },
  { name: 'Marketing', value: 'Marketing' }];

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      department: [null, Validators.required],
      dob: [null, Validators.required],
      salary: [null, [Validators.required, Validators.min(10000)]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, Validators.requiredTrue]
    })
  }

  get f(){
    return this.employeeForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.employeeForm.invalid){
      this.employeeForm.markAllAsTouched();
      return;
    }
    console.log(this.employeeForm.value);

    this.messageService.add({
      severity: 'success',
      summary: 'success',
      detail: 'Employee Registered Successfully'
    });

    this.employeeForm.reset();

    this.submitted = false;

    
  }

  resetForm(){
    this.employeeForm.reset();
    this.submitted = false;
  }
}
