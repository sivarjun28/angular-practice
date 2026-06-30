import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-demo',
  standalone: true,
   template: `
    <p class="global-text">
      None Encapsulation
    </p>
  `,
  styles:[`
    .global-text{
      color:red;
      font-size:22px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoneDemo {}
