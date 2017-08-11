import { Component } from '@angular/core';
import { TemperatureMonitor } from './TemperatureMonitor';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  median: number;    
  temperatures: any;
  progressBar = this.getPercentage() + '%';
  title = 'Temperature Monitor';
  
  constructor(private tempService: TemperatureMonitor){ 
  }
  
  setTemp(){
    this.tempService.setTemp(this.temperatures);  
    this.progressBar = this.getPercentage() + '%';
  }
  
  getMedian(){
    this.tempService.getCurrentMedian();
    this.median = this.tempService.median;
  }
  
  getPercentage(){
    return ((this.tempService.temp.length/8)*100);
  }
}
