import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  currentTheme = 'light';

  setTheme(theme: string): void {
    this.currentTheme = theme;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}