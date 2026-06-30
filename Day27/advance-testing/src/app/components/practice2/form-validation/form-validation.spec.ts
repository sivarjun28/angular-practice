import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidation } from './form-validation';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormValidation Component', () => {
  let component: FormValidation;
  let fixture: ComponentFixture<FormValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidation, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form initially', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should show error when name is empty and touched', () => {
    const nameControl = component.form.get('name');
    nameControl?.markAsTouched();
    fixture.detectChanges();

    const error = fixture.debugElement.query(By.css('.error'));
    expect(error).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');

    expect(emailControl?.valid).toBeFalsy();
  });

  it('should be valid when all fields are correct', () => {
    component.form.setValue({
      name: 'John',
      email: 'john@test.com'
    });

    expect(component.form.valid).toBeTruthy();
  });

  it('should set submittedData on valid submit', () => {
    component.form.setValue({
      name: 'John',
      email: 'john@test.com'
    });

    component.submit();

    expect(component.submittedData).toEqual({
      name: 'John',
      email: 'john@test.com'
    });
  });

  it('should NOT submit when form is invalid', () => {
    component.submit();
    expect(component.submittedData).toBeNull();
  });

  it('should reset the form', () => {
    component.form.setValue({
      name: 'John',
      email: 'john@test.com'
    });

    component.reset();

    expect(component.form.value).toEqual({
      name: null,
      email: null
    });
  });

});
