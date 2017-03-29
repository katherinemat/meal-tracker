import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <ul>
    <li *ngFor="let keg of kegs">{{keg.name}}, {{keg.alcoholContent}} from {{keg.brand}} - {{keg.price}}</li>
  </ul>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Spacedust', 'Elysian', 6, '5.9')
  ]
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) { }
}
