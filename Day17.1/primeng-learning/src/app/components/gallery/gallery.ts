import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { KnobModule } from 'primeng/knob';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-gallery',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    PanelModule,
    AccordionModule,
    DialogModule,
    ToastModule,
    ChipModule,
    BadgeModule,
    AvatarModule,
    TagModule,
    ProgressBarModule,
    SliderModule,
    RatingModule,
    KnobModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.html',
  providers: [MessageService],
  styleUrl: './gallery.scss',
})
export class Gallery {

  textValue: string = '';
  textareaValue: string = '';
  selectedCity: City | undefined;
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  date: Date | string = '';
  checked: boolean = false;
  selectedOption: string = 'option1';
  visible: boolean = false;
  
  sliderValue: number = 50;
  ratingValue: number = 3;
  knobValue: number = 75;

  showDialog(){
    this.visible = true
  }

  constructor(private messageService: MessageService) { }


  showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail, life: 3000 })
  }
}
