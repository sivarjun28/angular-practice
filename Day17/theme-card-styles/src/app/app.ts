import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { NoneDemo } from './components/none-demo/none-demo';
import { ShadowDemo } from './components/shadow-demo/shadow-demo';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';
import { Card } from './components/card/card';
import { EmulatedDemoComponent } from './components/emulated-demo/emulated-demo';
import { ThemeService } from './services/theme';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NoneDemo, ShadowDemo, ThemeSwitcher, Card, EmulatedDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('theme-card-styles');

  constructor(public themeService : ThemeService){}
}
