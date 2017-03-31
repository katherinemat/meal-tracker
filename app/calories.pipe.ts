import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "caloriesPipe",
  //still don't fully understand what pure false/true means or stateless vs statefull
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], amount){
    var output: Meal[] = [];
    if(amount === "more") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(amount === "less") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
