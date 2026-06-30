import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TabItem, TabsService } from '../../../services/tabs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-container',
  imports: [CommonModule],
  templateUrl: './tab-container.html',
  styleUrl: './tab-container.scss',
})
export class TabContainer {

  tabs: TabItem[] = [];
  activeTabId: number | null = null;
  activeTab: TabItem | null = null;

  constructor(private tabService: TabsService) {}

  ngOnInit() {

    this.tabService.getTabs().subscribe(tabs => {
      this.tabs = tabs;
      this.updateActiveTab();
    });

    this.tabService.getActiveTab().subscribe(id => {
      this.activeTabId = id;
      this.updateActiveTab();
    });
  }

  updateActiveTab() {
    this.activeTab = this.tabs.find(t => t.id === this.activeTabId) || null;
  }

  selectTab(id: number) {
    this.tabService.setActive(id);
  }

  closeTab(id: number) {
    this.tabService.removeTab(id);
  }
}

