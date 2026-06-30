import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDemo } from './shadow-demo';

describe('ShadowDemo', () => {
  let component: ShadowDemo;
  let fixture: ComponentFixture<ShadowDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ShadowDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
