import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.scss',
})
export class Wizard {
  currentStep = signal(1);
  name = signal('');
  city = signal('');
  skill = signal('');
  progress = computed(() =>
    (this.currentStep() / 4) * 100);

  nextStep(){
    if(this.currentStep() < 4){
      this.currentStep.update(
        value => value + 1
      )
    }
  }

  previousStep(){
    if(this.currentStep() > 1){
      this.currentStep.update(
        value => value - 1
      )
    }
  }
}
