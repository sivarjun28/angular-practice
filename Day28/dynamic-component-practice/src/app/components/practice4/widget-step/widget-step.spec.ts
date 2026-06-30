import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStep } from './widget-step';

describe('WidgetStep', () => {
  let component: WidgetStep;
  let fixture: ComponentFixture<WidgetStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStep],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
