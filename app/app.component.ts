import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>

  <keg-list [childKegs]="masterKegs" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <edit-keg [childSelectedKeg] = "selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>

  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})

export class AppComponent {
  masterKegs: Keg[] = [
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

  addKeg(newKegFromChild: Keg) {
    this.masterKegs.push(newKegFromChild);
  }
}
