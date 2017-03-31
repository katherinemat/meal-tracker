import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h2>Add New Meal</h2>
  <label>Meal Name:</label>
  <input #mealName>
  <label>Meal Details:</label>
  <input #mealDetails>
  <label>Meal Calories:</label>
  <input #mealCalories>
  <button (click)="submitNewMeal(mealName.value, mealDetails.value, mealCalories.value); mealName.value=''; mealDetails.value=''; mealCalories.value=''">Submit</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitNewMeal(name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMeal);
  }
}
