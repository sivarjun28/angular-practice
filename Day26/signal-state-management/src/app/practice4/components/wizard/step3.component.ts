import { Component, inject } from '@angular/core';
import { WizardService } from '../../../services/wizard.service';

@Component({
    selector: 'app-step3',
    template: `
    <h3>Step 3</h3>

    <input placeholder="Card Number"
      (input)="update($any($event.target).value)" />
  `
})
export class Step3Component {
    wizard = inject(WizardService);

    update(value: string) {
        this.wizard.updateStepData('step3', { cardNumber: value });
    }
}