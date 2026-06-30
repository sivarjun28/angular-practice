import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-demo',
  imports: [],
  template: `
    <p class="shadow-text">
      Shadow DOM Encapsulation
    </p>
  `,
  styles:[`
    .shadow-text{
      color:green;
      font-size:22px;
    }
  `],
  encapsulation : ViewEncapsulation.None
})
export class ShadowDemo {}
