import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="title">Tap Room</h1>

  <keg-list [childKegs]="masterKegs" (clickSender)="editKeg($event)" (sellClickSender)="sellPint($event)" (happyHourClickSender)="happyHour($event)" (growlClickSender)="sellGrowler($event)" [happyHourString]="masterHappyHourString" (allHappyHourClickSender)="allHappyHour($event)"></keg-list>
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

  masterHappyHourString: string = "put all kegs on happy hour";

  allHappyHour() {
    if(this.masterHappyHourString === "put all kegs on happy hour") {
      //change button text
      this.masterHappyHourString = "take all kegs off happy hour";
      //this for loop loops through each keg in childKegs
      for(var i = 0; i < this.masterKegs.length; i ++) {
        //if a keg is off happy hour, put it on happy hour
        if (this.masterKegs[i].happyHour === "put on happy hour") {
          this.masterKegs[i].price = this.masterKegs[i].price/2;
          this.masterKegs[i].happyHour = "take off happy hour";
        }
      }
    } else {
      //change button text
      this.masterHappyHourString = "put all kegs on happy hour";
      //this for loop loops through each keg in masterKegs
      for(var i = 0; i < this.masterKegs.length; i ++) {
        //if a keg is on happy hour, take it off happy hour
        if (this.masterKegs[i].happyHour === "take off happy hour") {
          this.masterKegs[i].price = this.masterKegs[i].price*2;
          this.masterKegs[i].happyHour = "put on happy hour";
        }
      }
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegs.push(newKegFromChild);
  }
}
