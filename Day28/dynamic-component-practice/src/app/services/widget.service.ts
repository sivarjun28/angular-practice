import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface WidgetItem {
  id: number;
  title: string;
  component: any;
}
@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  private widgets: any[] = [];
  private widgets$ = new BehaviorSubject<any[]>([]);

  getWidgets() {
    return this.widgets$.asObservable();
  }

  addWidget(title: string, component: Type<any>) {
    const widget = {
      id: Date.now(),
      title,
      component
    };

    this.widgets.push(widget);
    this.save();
    this.widgets$.next(this.widgets);

  }

  removeWidget(id: number) {
    this.widgets = this.widgets.filter(w => w.id !== id);
    this.save();
    this.widgets$.next(this.widgets);
  }
  save() {
    localStorage.setItem('widgets', JSON.stringify(this.widgets));
  }

  load() {
    const data = localStorage.getItem('widgets');
    if (data) {
      this.widgets = JSON.parse(data);
      this.widgets$.next(this.widgets);
    }
  }
}
