import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class ToastComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';

  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
  
}
