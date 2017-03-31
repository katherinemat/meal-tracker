import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Meal Tracker</h1>

  <meal-list [childMeals]="masterMeals" (selectSender)="editMeal($event)"></meal-list>

  <new-meal (newMealSender)="addMeal($event)"></new-meal>

  <edit-meal [childSelectedMeal]="selectedMeal" (editSender)="finishedEditing()"></edit-meal>
  `
})

export class AppComponent {
  masterMeals: Meal[] = [
    new Meal('Smoothie', 'super proud of myself because lots of healthy fruits and vegetables', 350),
    new Meal('peanut butter and jelly sandwich', 'classic but with sliced strawberries and cinnamon instead of jelly', 520),
    new Meal('ramen', 'I think my stomach is becoming much more sensitive because I cant even handle a bowl of ramen without getting a stomach ache. maybe too rich?', 780)
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
