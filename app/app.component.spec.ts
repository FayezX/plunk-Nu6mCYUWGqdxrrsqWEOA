import { NgModule }      from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperatureMonitor } from './TemperatureMonitor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [TemperatureMonitor]
    }).compileComponents();
  }));
   
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Temperature Monitor');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Temperature Monitor');
  }));
  
  it('Testing for correct developer name', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Fayez');
  })); 
  
  it('Testing if service setTemp function accepts numbers', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    //testing the if statement
    expect((app.tempService.setTemp(10))).toBeTruthy();
    //testing the else statement
    expect((app.tempService.setTemp("string"))).toBeFalsy();
  }));
  
  it('Testing if temp max input is 8', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.tempService.temp = [1,2,3,4,5,6,7]; //change array numbers
    expect((app.tempService.recordTemperature(10))).toEqual(true);  //test is only true if we provide number.
  }));
  
   it('Testing service median function', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    //testing the if statement
    app.tempService.temp = [1,2,3,4,5,7,9]; //change array numbers for testing
    expect((app.tempService.getCurrentMedian())).toEqual(4);  //test to see the median.
    //testing the else statement
    app.tempService.temp = [1,2,3,4,5,6]; //change array numbers for testing
    expect((app.tempService.getCurrentMedian())).toEqual(3.5);  //test to see the median.
  }));
  
   it('Testing the progress bar percentage', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.tempService.temp = [1,2]; //change array numbers for testing
    expect((app.getPercentage())).toEqual(25);  //test to see the percentage (?/8)
  }));
});
