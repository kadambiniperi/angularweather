import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  currentTemperature: number = 25;

  city: string = ''; // Initialize the city property

  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city)
      .subscribe((data: any) => {
        this.weatherData = data;
        console.log(data);
      });
  }
}