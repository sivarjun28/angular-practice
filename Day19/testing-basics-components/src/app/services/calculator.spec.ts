import { TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let service: Calculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add numbers correctly', () => {
    expect(service.add(5, 3)).toBe(8)
  })

  it('should subtract numbers correctly', () => {
    expect(service.subtract(5, 3)).toBe(2)
  })

  it('should multiply numbers correctly', () => {
    expect(service.multiply(5, 3)).toBe(15)
  })

  it('should divide numbers correctly', () => {
    expect(service.divide(10, 2)).toBe(5)
  })

  it('should throw error when dividing by zero', () => {
    expect(() => service.divide(10, 0))
      .toThrow(new Error('Cannot divide by zero'));
  });

});
