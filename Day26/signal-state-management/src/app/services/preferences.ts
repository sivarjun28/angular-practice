import { computed, effect, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'hi' | 'kn'
@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private theme = signal<Theme>('light');
  private language = signal<Language>('en');
  private notifications = signal<boolean>(true);

  theme$ = this.theme.asReadonly();
  language$ = this.language.asReadonly();
  notifications$ = this.notifications.asReadonly();

  isDarkMode = computed(() => this.theme() == 'dark');

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }

  setLanguage(language: Language) {
    this.language.set(language)
  }

  toggleNotifications() {
    this.notifications.update(v => !v)
  }

  save() {
    const data = {
      theme: this.theme(),
      language: this.language(),
      notifications: this.notifications()
    };

    localStorage.setItem('preferences', JSON.stringify(data))
  }

  load() {
    const saved = localStorage.getItem('preferences');

    if (saved) {
      const data = JSON.parse(saved);
      this.theme.set(data.theme);
      this.language.set(data.language);
      this.notifications.set(data.notifications);
    }
  }

  constructor() {
    this.load();
    effect(() => {
      this.save();
    });
  }
}
