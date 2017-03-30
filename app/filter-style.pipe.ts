import { Pipe, PipeTransform } from  '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "filterStyle",
  pure: false
})

export class FilterStylePipe implements PipeTransform {
  transform(input: Keg[], style){
    var output: Keg[] = [];
    if(style === "IPA") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].style === "IPA") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
