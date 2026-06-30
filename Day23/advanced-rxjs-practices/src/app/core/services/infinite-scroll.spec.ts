import { TestBed } from '@angular/core/testing';

import { InfiniteScroll } from './infinite-scroll';

describe('InfiniteScroll', () => {
  let service: InfiniteScroll;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfiniteScroll);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
