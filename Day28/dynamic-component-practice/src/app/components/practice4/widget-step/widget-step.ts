import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WizardStep } from '../../../services/widget.step';
import { StepOneComponent } from './StepOneComponent';
import { StepTwoComponent } from './StepTwoComponent';
import { StepThreeComponent } from './StepThreeComponent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-step',
  imports: [CommonModule],
  templateUrl: './widget-step.html',
  styleUrl: './widget-step.scss',
})
export class WidgetStep {
  stepsConfig = [
    { title: 'User Info', component: StepOneComponent },
    { title: 'Contact', component: StepTwoComponent },
    { title: 'Summary', component: StepThreeComponent }
  ];

  currentIndex = 0;
  stepInstance!: WizardStep;

  formData: any = {};

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  ngAfterViewInit() {
    this.loadStep();
  }

  loadStep() {
    this.container.clear();

    const step = this.stepsConfig[this.currentIndex];
    const ref = this.container.createComponent(step.component);

    this.stepInstance = ref.instance;

    this.stepInstance.data = this.formData[step.title] || {};

    if (step.title === 'Summary') {
      this.stepInstance.data = this.formData; 
    } else {
      this.stepInstance.data = this.formData[step.title] || {};
    }
  }

  next() {
    if (!this.stepInstance.isValid()) {
      alert('Please fill valid data');
      return;
    }

    const stepKey = this.stepsConfig[this.currentIndex].title;
    this.formData[stepKey] = this.stepInstance.data;

    this.currentIndex++;
    this.loadStep();
  }

  prev() {
    this.currentIndex--;
    this.loadStep();
  }

  submit() {
    if (!this.stepInstance.isValid()) {
      alert('Invalid step');
      return;
    }

    const stepKey = this.stepsConfig[this.currentIndex].title;
    this.formData[stepKey] = this.stepInstance.data;

    console.log('FINAL DATA:', this.formData);
    alert('Submitted! Check console');
  }
}
