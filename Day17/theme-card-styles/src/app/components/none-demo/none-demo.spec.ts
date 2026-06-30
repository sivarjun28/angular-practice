import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneDemo } from './none-demo';

describe('NoneDemo', () => {
  let component: NoneDemo;
  let fixture: ComponentFixture<NoneDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoneDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(NoneDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
