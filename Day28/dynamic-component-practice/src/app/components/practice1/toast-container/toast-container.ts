import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../toast/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-container',
  imports: [CommonModule, ToastComponent],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss',
})
export class ToastContainer {
  @ViewChild('container', { read: ViewContainerRef })

  container!: ViewContainerRef;

  private toasts: ComponentRef<ToastComponent>[] = [];
  ngAfterViewInit() {
    console.log('Container ready ✅');
  }
  addToast(message: string, type: any, duration: number) {
    const ref = this.container.createComponent(ToastComponent);

    ref.instance.message = message;
    ref.instance.type = type;

    ref.instance.closed.subscribe(() => this.removeToast(ref));

    setTimeout(() => {
      this.removeToast(ref);
    }, duration);

    this.toasts.push(ref);
  }
  removeToast(ref: ComponentRef<ToastComponent>) {
    const index = this.toasts.indexOf(ref);
    if (index !== -1) {
      this.toasts.splice(index, 1);
      ref.destroy();
    }
  }
}
