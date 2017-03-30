import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <h3>Filter by</h3>
  <label>pints left</label>
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="lessThanTen">Less than 10 pints left</option>
  </select>

  <label>style</label>
  <select (change)="onStyleChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="IPA">IPA</option>
    <option value="Amber">Amber</option>
    <option value="Pilsner">Pilsner</option>
    <option value="Lager">Lager</option>
  </select>

  <ul>
  <!-- let is the same as var, just in small scope. "let keg of childKegs" is where we declare that keg is equal to each keg object in childKegs array -->
    <li [class]="kegStyle(keg)" *ngFor="let keg of childKegs | remainingPints:filterByPints | filterStyle:filterByStyle">
      <span class="keg-name">{{keg.name}}</span>
      <br>
      <p>Brand: {{keg.brand}}</p>
      <p>Style: {{keg.style}}</p>
      <p>Alcohol Content: {{keg.alcoholContent}}%</p>
      <p>Price: \${{keg.price}}</p>
      <button class="btn"(click)="sellPint(keg)">Sell Pint</button>
      <button class="btn" (click)="sellGrowler(keg)">Sell Growler</button>
      <button class="btn" (click)="happyHour(keg)">{{keg.happyHour}}</button>
      <p>Pints: {{keg.pints}}</p>
      <button class="btn btn-sm edit-keg-button" (click)="editKegClicked(keg)">Edit keg</button>
    </li>
  </ul>
  <button class="btn"(click)="allHappyHour()">{{happyHourString}}</button>
  `
})

export class KegListComponent {
  @Input() childKegs: Keg[];
  @Input() happyHourString: string;
  //need to declare separate EventEmitter objects for each function/action because they need to be different variables (look inside the <keg-list> tag in the app component)
  @Output() clickSender = new EventEmitter();
  @Output() sellClickSender = new EventEmitter();
  @Output() growlClickSender = new EventEmitter();
  @Output() happyHourClickSender = new EventEmitter();
  @Output() allHappyHourClickSender = new EventEmitter();

  kegStyle(keg){
    let kegClass = keg.name;
    let alcoholNumber = +keg.alcoholContent;

    if(keg.price > 7) {
      kegClass = kegClass + " expensive";
    } else if(keg.price > 4) {
      kegClass = kegClass + " normal";
    } else {
      kegClass = kegClass + " cheap";
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
  }

  sellGrowler(growlToSell: Keg) {
    this.growlClickSender.emit(growlToSell);
  }

  happyHour(happyHourKeg: Keg) {
    this.happyHourClickSender.emit(happyHourKeg);
  }

  allHappyHour() {
    this.allHappyHourClickSender.emit();
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
