import { Component } from "@angular/core";
import { WizardStep } from "../../../services/widget.step";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'step-two',
  imports:[CommonModule, JsonPipe,FormsModule],
  template: `
    <h3>Contact</h3>
    <input [(ngModel)]="data.email" placeholder="Email">
  `
})
export class StepTwoComponent implements WizardStep {
  data: any = {};

  isValid() {
    return this.data.email?.includes('@');
  }
}