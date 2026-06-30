import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-temperature-converter',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './temperature-converter.html',
  styleUrl: './temperature-converter.scss',
})
export class TemperatureConverter {

  celsius: number = 0;
  fahrenheit: number = 32;
  weatherStatus: string = 'Cold ❄️';

  updateFromCelsius() {
    this.fahrenheit = Number(
      ((this.celsius * 9 / 5) + 32).toFixed(2)
    );

    this.updateWeatherStatus();
  }

  updateFromFahrenheit(){
    this.celsius = Number(
      ((this.fahrenheit - 32) * 5 / 9).toFixed(2)
    )

     this.updateWeatherStatus();
  }

  updateWeatherStatus(){
    if(this.celsius <= 10){
      this.weatherStatus = 'Cold ❄️ '
    }
    else if(this.celsius <= 25){
      this.weatherStatus = 'Pleasant 🌤️';
    }
    else{
      this.weatherStatus = 'Hot ☀️';
    }
  }
}
