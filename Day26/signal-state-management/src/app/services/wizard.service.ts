import { computed, Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WizardService {
    
  currentStep = signal(1);

  formData = signal({
    step1: { name: '', email: '' },
    step2: { address: '', city: '' },
    step3: { cardNumber: '' }
  });

  isStepValid = computed(() => {
    const step = this.currentStep();
    const data = this.formData();

    if (step === 1) {
      return data.step1.name && data.step1.email;
    }

    if (step === 2) {
      return data.step2.address && data.step2.city;
    }

    if (step === 3) {
      return data.step3.cardNumber.length === 16;
    }

    return false;
  });

  progress = computed(() => (this.currentStep() / 3) *100)

  updateStepData(step: 'step1' | 'step2' | 'step3', value:any){
    this.formData.update(data => ({
        ...data, [step] : {...data[step], ...value}
    }));
  }

  next(){
    if(this.isStepValid() && this.currentStep() < 3){
        this.currentStep.update(s => s + 1)
    }
  }

  prev(){
    if(this.currentStep() > 1){
        this.currentStep.update(s => s - 1)
    }
  }
}