import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="message" class="error">
      {{ message }}
    </div>
  `,
  styleUrls: ['./error-message.scss']
})
export class ErrorMessage {
  @Input() message: string = '';
}