import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let keg of kegs">{{keg.name}}, {{keg.alcoholContent}} from {{keg.brand}} - {{keg.price}}, {{keg.pints}} pints left <button (click)="editKeg(keg)">Edit keg</button></li>
  </ul>
  `
})

export class KegListComponent {
  kegs: Keg[] = [
    new Keg('Spacedust', 'Elysian', 6, '5.9'),
    new Keg('Otter Water', 'Philipsburg', 4, '4.5'),
    new Keg('Dawn Patrol', 'Aslan', 5, '7'),
    new Keg('PBR', 'PBR', 3, '2.5'),
    new Keg('Moose Drool', 'Big Sky', 5, '5.3')
  ];
}
