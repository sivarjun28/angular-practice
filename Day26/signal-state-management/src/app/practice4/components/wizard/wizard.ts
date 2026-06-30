import { Component, inject } from '@angular/core';
import { WizardService } from '../../../services/wizard.service';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1.component';
import { Step2Component } from './step2.component';
import { Step3Component } from './step3.component';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule, Step1Component, Step2Component, Step3Component],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})
export class Wizard {
  wizard = inject(WizardService)
}
