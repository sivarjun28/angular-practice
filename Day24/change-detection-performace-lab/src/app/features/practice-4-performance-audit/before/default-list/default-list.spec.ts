import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultList } from './default-list';

describe('DefaultList', () => {
  let component: DefaultList;
  let fixture: ComponentFixture<DefaultList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultList],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
