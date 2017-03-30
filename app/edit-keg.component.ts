import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>Edit Keg</h3>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <label>Enter Keg Style:</label>
      <input [(ngModel)]="childSelectedKeg.style">
      <label>Enter Pint Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <label>Enter Keg Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <button class="btn"(click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  finishedEditing() {
    this.doneButtonClickedSender.emit();
  }
}
