import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-weather-widget',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './weather-widget.html',
  styleUrl: './weather-widget.scss',
})
export class WeatherWidget {
  location: string = 'Bangalore';

  currentTemp: number = 28;

  condition: string = 'sunny';

  weatherIcon: string = '☀️';

  forecast = [
    {
      day: 'Tue',
      temp: 29,
      condition: '☀️'
    },
    {
      day: 'Wed',
      temp: 27,
      condition: '🌧️'
    },
    {
      day: 'Thu',
      temp: 26,
      condition: '⛅'
    },
    {
      day: 'Fri',
      temp: 30,
      condition: '☀️'
    },
    {
      day: 'Sat',
      temp: 25,
      condition: '🌧️'
    }
  ];
}
