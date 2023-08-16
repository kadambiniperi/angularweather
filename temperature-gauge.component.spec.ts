import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureGaugeComponent } from '../temperature-gauge/temperature-gauge.component'; 

describe('TemperatureGaugeComponent', () => {
  let component: TemperatureGaugeComponent;
  let fixture: ComponentFixture<TemperatureGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemperatureGaugeComponent]
    })
    .compileComponents(); // Use async/await for TestBed configuration
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
