import {Injectable} from '@angular/core';

@Injectable()
export class TemperatureMonitor{
    median: number;
    temp: number[] = [];    
    constructor(){     
    }    
    recordTemperature(tem: number){
        if(this.temp.length < 8){
            this.temp.push(tem);
            return true;
        }else{
            alert("You have reached the max limit");
            return false;
        }
    }    
    
    getCurrentMedian(){
        this.temp.sort(function(a, b){return a - b});
        let num = this.temp.length/2;
        if(this.temp.length !== 0){
            if(this.temp.length%2 == 0){
               return this.median = (this.temp[num-1]+this.temp[num])/2;
            }else{
               num = Math.round(num);
               return this.median = this.temp[num-1]; 
            }
        }else{
            alert("no input detected")
        }
    }
    
    setTemp(tem: any){
        if(!isNaN(parseInt(tem))){
                this.recordTemperature(parseInt(tem));
                return true;
        }else{
            alert("please enter a number");
            return false
        }
    }
} 