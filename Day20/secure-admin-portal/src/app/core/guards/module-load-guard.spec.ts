import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moduleLoadGuard } from './module-load-guard';

describe('moduleLoadGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => moduleLoadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
