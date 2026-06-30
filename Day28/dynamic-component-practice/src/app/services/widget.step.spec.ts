import { TestBed } from '@angular/core/testing';

import { WidgetStep } from './widget.step';

describe('WidgetStep', () => {
  let service: WidgetStep;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetStep);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
