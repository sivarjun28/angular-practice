import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentApi } from './dependent-api';

describe('DependentApi', () => {
  let component: DependentApi;
  let fixture: ComponentFixture<DependentApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependentApi],
    }).compileComponents();

    fixture = TestBed.createComponent(DependentApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
