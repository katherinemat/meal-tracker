import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <ul>
    <li *ngFor="let keg of kegs">{{keg.name}}, {{keg.alcoholContent}} from {{keg.brand}} - {{keg.price}} <button (click)="editKeg(keg)">Edit keg</button></li>
  </ul>
  <div *ngIf="selectedKeg">
    <h3>Edit Keg</h3>
    <label>Enter Keg Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label>Enter Keg Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>Enter Pint Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <label>Enter Keg Alcohol Content:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Otter Water', 'Philipsburg', 4, '4.5'),
    new Keg('Dawn Patrol', 'Aslan', 5, '7'),
    new Keg('PBR', 'PBR', 3, '2.5'),
    new Keg('Moose Drool', 'Big Sky', 5, '5.3')
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) { }
}
