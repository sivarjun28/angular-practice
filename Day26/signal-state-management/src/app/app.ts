import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preferences } from './practice1/components/preferences/preferences';
import { NotesList } from './practice2/components/notes-list/notes-list';
import { NoteForm } from './practice2/components/note-form/note-form';
import { Cart } from './practice3/components/cart/cart';
import { ProductList } from './practice3/components/product-list/product-list';
import { Wizard } from './practice4/components/wizard/wizard';
import { Step1Component } from './practice4/components/wizard/step1.component';
import { Step2Component } from './practice4/components/wizard/step2.component';
import { Step3Component } from './practice4/components/wizard/step3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preferences, NotesList, NoteForm, ProductList,Cart, Wizard, Step1Component, Step2Component, Step3Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signal-state-management');


  @ViewChild('formRef', { read: ElementRef }) form!: ElementRef;

  scrollToForm() {
    this.form.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
