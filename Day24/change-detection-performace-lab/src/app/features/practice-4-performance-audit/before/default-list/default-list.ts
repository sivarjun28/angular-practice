import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-list',
  imports: [CommonModule],
  templateUrl: './default-list.html',
  styleUrl: './default-list.scss',
})
export class DefaultList {
  items = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    name: 'Item ' + i,
    completed: false
  }));

  addItem() {
    this.items.push({
      id: Date.now(),
      name: 'New Item',
      completed: false
    });
  }

  toggle(item: any) {
    item.completed = !item.completed; 
  }

  get completedCount() {
    console.log('Getter running...');
    return this.items.filter(i => i.completed).length;
  }
}
