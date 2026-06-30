import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedDemo } from './emulated-demo';

describe('EmulatedDemo', () => {
  let component: EmulatedDemo;
  let fixture: ComponentFixture<EmulatedDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(EmulatedDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
