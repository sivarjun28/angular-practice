import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings implements OnInit {

  darkMode = false;

  notifications = true;

  autoPlay = true;

  username = 'Sivarjun';

  ngOnInit(): void {

    const savedTheme =
    localStorage.getItem('darkMode');

    if(savedTheme === 'true'){

      this.darkMode = true;
    }
  }

  toggleTheme(){

    this.darkMode = !this.darkMode;

    localStorage.setItem(
      'darkMode',
      String(this.darkMode)
    );
  }
}