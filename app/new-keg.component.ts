import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
  <h1>New Task</h1>
  <div>
    <div>
      <h3>New Keg</h3>
      <label>Enter Keg Name:</label>
      <input #kegName>
      <label>Enter Keg Brand:</label>
      <input #kegBrand>
      <label>Enter Pint Price:</label>
      <input #kegPrice>
      <label>Enter Keg Alcohol Content:</label>
      <input #kegAlcoholContent>
      <button (click)="submitForm(kegName.value, kegBrand.value, kegPrice.value, kegAlcoholContent.value); kegName.value=''; kegBrand.value=''; kegPrice.value=''; kegAlcoholContent.value=''">Done</button>
    </div>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: string) {
    var newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKeg);
  }
}
