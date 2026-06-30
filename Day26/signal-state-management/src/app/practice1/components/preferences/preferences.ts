import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Language, PreferencesService, Theme } from '../../../services/preferences';

@Component({
  selector: 'app-preferences',
  imports: [CommonModule, FormsModule],
  templateUrl: './preferences.html',
  styleUrl: './preferences.scss',
})
export class Preferences {

  constructor(public prefs: PreferencesService) { }

  setTheme(theme: Theme) {
    this.prefs.setTheme(theme)
  }
  setLanguage(language: Language) {
    this.prefs.setLanguage(language);
  }
}
