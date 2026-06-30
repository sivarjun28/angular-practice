import { Component, inject } from '@angular/core';
import { WizardService } from '../../../services/wizard.service';

@Component({
    selector: 'app-step1',
    template: `
    <h3>Step 1</h3>

    <input placeholder="Name"
      (input)="update('name', $any($event.target).value)" />

    <input placeholder="Email"
      (input)="update('email', $any($event.target).value)" />
  `
})
export class Step1Component {
    wizard = inject(WizardService);

    update(field: string, value: string) {
        this.wizard.updateStepData('step1', { [field]: value });
    }
}@Component({
  selector: 'app-step2',
  template: `
    <h3>Step 2</h3>

    <input placeholder="Address"
      (input)="update('address', $any($event.target).value)" />

    <input placeholder="City"
      (input)="update('city', $any($event.target).value)" />
  `
})
export class Step2Component {
  wizard = inject(WizardService);

  update(field: string, value: string) {
    this.wizard.updateStepData('step2', { [field]: value });
  }
}