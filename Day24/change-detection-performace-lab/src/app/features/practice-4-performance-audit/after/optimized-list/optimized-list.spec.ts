import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedList } from './optimized-list';

describe('OptimizedList', () => {
  let component: OptimizedList;
  let fixture: ComponentFixture<OptimizedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedList],
    }).compileComponents();

    fixture = TestBed.createComponent(OptimizedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
