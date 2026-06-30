import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-list',
  imports: [CommonModule],
  templateUrl: './optimized-list.html',
  styleUrl: './optimized-list.scss',
})
export class OptimizedList {
   items = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    name: 'Item ' + i,
    completed: false
  }));

  completedCount = 0;

  addItem() {
    const newItem = {
      id: Date.now(),
      name: 'New Item',
      completed: false
    };

    this.items = [...this.items, newItem]; 
    this.updateCount();
  }

  toggle(id: number) {
    this.items = this.items.map(item =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    this.updateCount();
  }

  updateCount() {
    this.completedCount = this.items.filter(i => i.completed).length;
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
