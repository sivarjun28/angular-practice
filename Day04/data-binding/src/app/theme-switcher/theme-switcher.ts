import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    const saveTheme = localStorage.getItem('theme');

    if(saveTheme === 'dark'){
      this.isDarkMode = true;
    }
  }

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;

    localStorage.setItem(
      'theme', this.isDarkMode ? 'Dark' : 'light'
    );
  }
}
