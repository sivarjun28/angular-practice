import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './services/toast.service';
import { ToastContainer } from './components/practice1/toast-container/toast-container';
import { TabContainer } from './components/practice2/tab-container/tab-container';
import { CommonModule } from '@angular/common';
import { TabsService } from './services/tabs.service';
import { TabOneComponent } from './components/practice2/tab-container/tab-one-component';
import { TabTwoComponent } from './components/practice2/tab-container/tab-two-component';
import { WidgetDashboard } from './components/practice3/widget-dashboard/widget-dashboard';
import { WidgetOneComponent } from './components/practice3/widget-dashboard/widget-one-component';
import { WidgetTwoComponent } from './components/practice3/widget-dashboard/widget-two-component';
import { WidgetStep } from './components/practice4/widget-step/widget-step';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastContainer,
    TabContainer,
    CommonModule,
    TabOneComponent,
    TabTwoComponent,
    WidgetDashboard,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetStep
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('dynamic-component-practice');

  constructor(
    private toast: ToastService,
    private tabService: TabsService
  ) { }

  showSuccess() {
    this.toast.success('Success message');
  }

  showError() {
    this.toast.error('Error message');
  }

  showWarning() {
    this.toast.warning('Warning message');
  }

  showInfo() {
    this.toast.info('Info message');
  }

  addTab1() {
    this.tabService.addTab('Tab 1', TabOneComponent);
  }

  addTab2() {
    this.tabService.addTab('Tab 2', TabTwoComponent);
  }
}