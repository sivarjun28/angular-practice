import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDashboard } from './widget-dashboard';

describe('WidgetDashboard', () => {
  let component: WidgetDashboard;
  let fixture: ComponentFixture<WidgetDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
