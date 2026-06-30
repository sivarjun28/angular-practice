import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-one',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Tab One Content</h3>
    <input [(ngModel)]="text" placeholder="Type something..." />
    <p>You typed: {{ text }}</p>
  `
})
export class TabOneComponent {
  text = '';
}