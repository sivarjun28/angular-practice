import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashboard } from './movie-dashboard';

describe('MovieDashboard', () => {
  let component: MovieDashboard;
  let fixture: ComponentFixture<MovieDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
