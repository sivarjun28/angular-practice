import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;

    compiled = fixture.nativeElement;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initilize count with 0', () => {
    expect(component.count).toBe(0);
  })

  it('should display initial count', () => {
    const h3 = compiled.querySelector('h3')

    expect(h3?.textContent)
      .contain('Counter: 0')
  })

  it('should increment count', () => {
    component.increment();

    expect(component.count).toBe(1);
  })


  it('should decrement count', () => {

    component.count = 5;
    component.decrement();

    expect(component.count).toBe(4);
  })

  it('should reset count', () => {
    component.count = 10;
    component.reset();

    expect(component.count).toBe(0);
  })



  it('should increment when button is clicked', () => {

    const button = compiled.querySelector('.increment') as HTMLButtonElement;

    button.click();

    fixture.detectChanges();

    expect(component.count).toBe(1);

  });
});
