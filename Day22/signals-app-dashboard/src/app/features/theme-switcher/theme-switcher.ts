import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {

  theme = signal(

    localStorage.getItem('theme')

    || 'light'

  );

  constructor() {

    effect(() => {

      document.body.classList.remove(
        'light',
        'dark'
      );

      document.body.classList.add(
        this.theme()
      );

      localStorage.setItem(
        'theme',
        this.theme()
      );

      console.log(
        'Theme:',
        this.theme()
      );

    });

  }

  changeTheme() {

    this.theme.update(value =>

      value === 'light'

        ? 'dark'

        : 'light'

    );

    console.log(this.theme());

  }
}
