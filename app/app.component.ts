import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <h1>Meal Tracker</h1>
  </div>

  <meal-list [childMeals]="masterMeals" (selectSender)="editMeal($event)"></meal-list>

  <new-meal (newMealSender)="addMeal($event)"></new-meal>

  <edit-meal [childSelectedMeal]="selectedMeal" (editSender)="finishedEditing()"></edit-meal>
  `
})

export class AppComponent {
  masterMeals: Meal[] = [
    new Meal('Smoothie', 'super proud of myself because lots of healthy fruits and vegetables', 350),
    new Meal('peanut butter and jelly', 'classic but with sliced strawberries and cinnamon instead of jelly', 520),
    new Meal('ramen', 'I think my stomach is becoming much more sensitive because I cant even handle a bowl of ramen without getting a stomach ache. maybe too rich?', 780),
    new Meal('yogurt and granola', 'so good. i\'m addicted to honey', 280),
    new Meal('trader joe\'s salad', 'not really enough food to fill me up for lunch but so good', 370),
    new Meal('burger and fries', 'in and out still has the best burgers but dicks is a good substitute', 780)
  ];

  addMeal(newMeal: Meal) {
    this.masterMeals.push(newMeal);
  }

//edit Meal functions and variables
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}
