import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverter } from './temperature-converter';

describe('TemperatureConverter', () => {
  let component: TemperatureConverter;
  let fixture: ComponentFixture<TemperatureConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
