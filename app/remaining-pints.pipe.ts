import { Pipe, PipeTransform } from  '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "remainingPints",
  pure: false
})

export class RemainingPintsPipe implements PipeTransform {
  transform(input: Keg[], pintsLeft){
    var output: Keg[] = [];
    if(pintsLeft === "lessThanTen") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
