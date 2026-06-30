import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;

    compiled = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize empty values', () => {
    expect(component.username).toBe('');

    expect(component.password).toBe('');


  })

  it('should disable login button when fields are empty', () => {
    component.username = '';
    component.password = '';

    fixture.detectChanges();

    const button = compiled.querySelector('button') as HTMLButtonElement

    expect(button.disabled).toBeTruthy();
  })


  it('should emit login event', () => {

    const emitSpy = vi.spyOn(component.login, 'emit');

    component.username = 'admin';
    component.password = '123';

    component.submit();

    expect(emitSpy)
      .toHaveBeenCalledWith({
        username: 'admin',
        password: '123'
      });

  });
});
