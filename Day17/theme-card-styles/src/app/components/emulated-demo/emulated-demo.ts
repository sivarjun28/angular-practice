import { Component } from '@angular/core';

@Component({
  selector: 'app-emulated-demo',
  standalone: true,
  template: `
    <p class="text">
      Emulated Encapsulation
    </p>
  `,
  styles:[`
    .text{
      color:blue;
      font-size:22px;
    }
  `]
})
export class EmulatedDemoComponent {}