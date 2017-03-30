import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>

  <keg-list [childKegs]="masterKegs" (clickSender)="editKeg($event)" (sellClickSender)="sellPint($event)" (happyHourClickSender)="happyHour($event)" (growlClickSender)="sellGrowler($event)"></keg-list>
  <hr>
  <edit-keg [childSelectedKeg] = "selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>

  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})

export class AppComponent {
  masterKegs: Keg[] = [
    new Keg('Spacedust', 'Elysian', 'IPA', 6, '5.9'),
    new Keg('Otter Water', 'Philipsburg', 'Pilsner', 4, '4.5'),
    new Keg('Dawn Patrol', 'Aslan', 'Amber', 5, '7'),
    new Keg('PBR', 'PBR', 'Lager', 3, '2.5'),
    new Keg('Moose Drool', 'Big Sky', 'Amber', 5, '5.3')
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellPint(clickedKeg) {
    clickedKeg.pints -= 1;
  }

  sellGrowler(clickedKeg) {
    clickedKeg.pints -= 2;
  }

  happyHour(clickedKeg) {
    if (clickedKeg.happyHour === "put on happy hour") {
      clickedKeg.price = clickedKeg.price/2;
      clickedKeg.happyHour = "take off happy hour";
    } else {
      clickedKeg.price = clickedKeg.price*2;
      clickedKeg.happyHour = "put on happy hour";
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegs.push(newKegFromChild);
  }
}
