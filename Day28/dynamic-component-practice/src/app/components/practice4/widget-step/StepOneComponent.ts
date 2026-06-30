import { Component } from "@angular/core";
import { WizardStep } from "../../../services/widget.step";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'step-one',
  imports:[CommonModule, JsonPipe,FormsModule],
  template: `
    <h3>User Info</h3>
    <input [(ngModel)]="data.name" placeholder="Name">
  `
})
export class StepOneComponent implements WizardStep {
  data: any = {};

  isValid() {
    return this.data.name?.trim().length > 0;
  }
}