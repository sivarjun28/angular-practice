import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    const productServiceSpy = {
      getProducts: jasmine.createSpy('getProducts').and.returnValue(of([
        { id: 1, title: 'Wireless Headphones', price: 129, category: 'Audio' },
        { id: 2, title: 'Ergonomic Keyboard', price: 79, category: 'Accessories' },
      ])),
    };

    await TestBed.configureTestingModule({
      imports: [Dashboard, RouterTestingModule],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
  });

  it('should create and render the dashboard sections', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.loading()).toBeFalse();
    expect(fixture.nativeElement.textContent).toContain('Inventory overview');
    expect(fixture.nativeElement.textContent).toContain('Recent activity');
  }));
});
