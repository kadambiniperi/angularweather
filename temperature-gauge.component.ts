import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.css']
})
export class TemperatureGaugeComponent {
  @Input() temperature: number = 0; // Default value
  temp: number = 0;

  convertToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  

  getGaugeColor(): string {
    if (this.temperature < 0) {
      return 'blue';
    } else if (this.temperature >= 0 && this.temperature <= 10) {
      const ratio = (this.temperature - 0) / (10 - 0);
      return `rgb(${Math.floor(0 + ratio * (255 - 0))}, ${Math.floor(0 + ratio * (255 - 0))}, 0)`;
    } else if (this.temperature > 10 && this.temperature <= 20) {
      const ratio = (this.temperature - 10) / (20 - 10);
      return `rgb(255, ${Math.floor(255 - ratio * (255 - 0))}, 0)`;
    } else if (this.temperature > 20 && this.temperature <= 30) {
      const ratio = (this.temperature - 20) / (30 - 20);
      return `rgb(255, ${Math.floor(0 + ratio * (255 - 0))}, 0)`;
    } else {
      return 'red'; // Default color for temperatures outside the specified range
    }
  }
}
