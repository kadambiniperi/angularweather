import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component'; // Update the import path

@NgModule({
    declarations: [
      TemperatureGaugeComponent,
      AppComponent,
      WeatherComponent,
      TemperatureGaugeComponent, // Make sure the path is correct
    ],
    
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxGaugeModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
