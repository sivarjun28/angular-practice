import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface TabItem {
  id: number;
  title: string;
  component: any;
  data?: any;
}
@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private tabs: TabItem[] = [];

  private tabs$ = new BehaviorSubject<TabItem[]>([]);

  private activeTabId$ = new BehaviorSubject<number | null>(null);

  getTabs() {
    return this.tabs$.asObservable();
  }

  getActiveTab() {
    return this.activeTabId$.asObservable();
  }

  addTab(title: string, component: Type<any>, data?: any) {
    const tab: TabItem = {
      id: Date.now(),
      title,
      component,
      data
    }

    this.tabs.push(tab);
    this.tabs$.next(this.tabs);
    this.activeTabId$.next(tab.id);
  }

  removeTab(id: number) {
    this.tabs = this.tabs.filter(t => t.id !== id);
    this.tabs$.next(this.tabs);

    if (this.tabs.length) {
      this.activeTabId$.next(this.tabs[0].id)
    } else {
      this.activeTabId$.next(null);
    }
  }
  setActive(id: number) {
    this.activeTabId$.next(id);
  }

}

