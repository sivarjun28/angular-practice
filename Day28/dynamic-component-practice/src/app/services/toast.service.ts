import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable
} from '@angular/core';
import { ToastContainer } from '../components/practice1/toast-container/toast-container';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private containerRef!: ComponentRef<ToastContainer>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  private initContainer() {
    if (this.containerRef) return;

    this.containerRef = createComponent(ToastContainer, {
      environmentInjector: this.injector
    });

    this.appRef.attachView(this.containerRef.hostView);

    const domElem = this.containerRef.location.nativeElement;
    document.body.appendChild(domElem);
  }

  show(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    duration = 3000
  ) {
    this.initContainer();

    if (!this.containerRef) return;

    this.containerRef.instance.addToast(message, type, duration);
  }

  success(msg: string) {
    this.show(msg, 'success');
  }

  error(msg: string) {
    this.show(msg, 'error');
  }

  warning(msg: string) {
    this.show(msg, 'warning');
  }

  info(msg: string) {
    this.show(msg, 'info');
  }
}