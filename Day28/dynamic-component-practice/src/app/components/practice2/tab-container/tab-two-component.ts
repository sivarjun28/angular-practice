import { Component } from '@angular/core';

@Component({
    selector: 'app-tab-two',
    standalone: true,
    template: `
    <h3>Tab Two Content</h3>
    <p>Counter: {{ count }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class TabTwoComponent {
    count: number = 0;

    increment() {
        this.count++;
    }
}