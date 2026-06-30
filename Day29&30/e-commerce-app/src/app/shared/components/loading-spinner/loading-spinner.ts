import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container" *ngIf="loading">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./loading-spinner.scss']
})
export class LoadingSpinner {
  @Input() loading = false;
}