import { Injectable } from '@angular/core';

export interface WizardStep {
  data: any;
  isValid(): boolean;
}
@Injectable({
  providedIn: 'root',
})
export class WidgetStep { }
