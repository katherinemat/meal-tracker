import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="lessThanTen">Less than 10 pints left</option>
  </select>

  <select (change)="onStyleChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="IPA">IPA</option>
    <option value="Amber">Amber</option>
    <option value="Pilsner">Pilsner</option>
    <option value="Lager">Lager</option>
  </select>

  <ul>
  <!-- let is the same as var, just in small scope. "let keg of childKegs" is where we declare that keg is equal to each keg object in childKegs array -->
    <li [class]="kegStyle(keg)" *ngFor="let keg of childKegs | remainingPints:filterByPints | filterStyle:filterByStyle">{{keg.name}}, a {{keg.style}} beer: {{keg.alcoholContent}} from {{keg.brand}} - {{keg.price}}, {{keg.pints}} pints left<button (click)="editKegClicked(keg)">Edit keg</button><button (click)="sellPint(keg)">Sell Pint</button><button (click)="sellGrowler(keg)">Sell Growler</button><button (click)="happyHour(keg)">Put on happy hour</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegs: Keg[];
  //need to declare separate EventEmitter objects for each function/action because they need to be different variables (look inside the <keg-list> tag in the app component)
  @Output() clickSender = new EventEmitter();
  @Output() sellClickSender = new EventEmitter();
  @Output() growlClickSender = new EventEmitter();

  kegStyle(keg){
    let kegClass = "";
    let alcoholNumber = +keg.alcoholContent;

    if(keg.price > 7) {
      kegClass = "expensive";
    } else if(keg.price > 4) {
      kegClass = "normal";
    } else {
      kegClass = "cheap";
    }
    if(alcoholNumber < 4) {
      kegClass = kegClass + " weak";
    } else if(alcoholNumber > 8) {
      kegClass = kegClass + " strong";
    }
    return kegClass;
  }

  editKegClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

//this function is simple. basically, one keg object is passed in as an argument. all we have to do is adjust that keg object's pints value to itself minus one.
  sellPint(kegToSell: Keg) {
    this.sellClickSender.emit(kegToSell);
    // kegToSell.pints -=1;
  }

  sellGrowler(growlToSell: Keg) {
    this.growlClickSender.emit(growlToSell);
  }

//TODO: modify this function to take a beer off happy hour also
  happyHour(kegToSell: Keg) {
    if (kegToSell.sale === false) {
      kegToSell.price = kegToSell.price/2;
      kegToSell.sale = true;
    }
  }

  filterByPints: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }

  filterByStyle: string = "allKegs";

  onStyleChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
  }
}
