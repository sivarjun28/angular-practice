import { Component } from '@angular/core';
import { WidgetService } from '../../../services/widget.service';
import { WidgetOneComponent } from './widget-one-component';
import { WidgetTwoComponent } from './widget-two-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-dashboard',
  imports: [CommonModule, WidgetOneComponent, WidgetTwoComponent],
  templateUrl: './widget-dashboard.html',
  styleUrl: './widget-dashboard.scss',
})
export class WidgetDashboard {
  widgets: any[] = [];
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.widgetService.load();

    this.widgetService.getWidgets().subscribe(w => {
      this.widgets = w;
    });
  }

  addWidget1(){
    this.widgetService.addWidget('Widget 1', WidgetOneComponent)
  }
  addWidget2(){
    this.widgetService.addWidget('Widget 2', WidgetTwoComponent)
  }

  remove(id:number){
    this.widgetService.removeWidget(id);
  }
}
