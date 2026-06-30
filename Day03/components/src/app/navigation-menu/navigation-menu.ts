import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-menu.html',
  styleUrls: ['./navigation-menu.scss']
})
export class NavigationMenu {

  brandName: string = 'MyApp';

  menuItems: string[] = [
    'Home',
    'About',
    'Services',
    'Contact'
  ];

  activeMenu: string = 'Home';

  isMobileMenuOpen: boolean = false;

  setActive(menu: string) {
    this.activeMenu = menu;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}