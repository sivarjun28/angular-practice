import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme';
@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  constructor(public themeservice : ThemeService){}

  changeTheme(theme : string){
    this.themeservice.setTheme(theme);
  }
}
