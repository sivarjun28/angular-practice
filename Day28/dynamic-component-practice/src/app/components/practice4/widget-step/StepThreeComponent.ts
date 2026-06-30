import { Component } from "@angular/core";
import { WizardStep } from "../../../services/widget.step";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'step-three',
    imports:[CommonModule, JsonPipe,FormsModule],
    template: `
    <h3>Summary</h3>
    <pre>{{ data | json }}</pre>
  `
})
export class StepThreeComponent implements WizardStep {
    data: any = {};

    isValid() {
        return true;
    }
}