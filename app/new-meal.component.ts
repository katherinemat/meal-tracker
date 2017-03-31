import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="titles">
    <h2>Add New Meal</h2>
  </div>
  <div class="form form-inline">
    <div class="form-group">
      <label>Name:</label>
      <input required class="form-control" #mealName>
    </div>
    <div class="form-group">
      <label>Details:</label>
      <textarea required maxlength="180" #mealDetails class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Calories:</label>
      <input required #mealCalories class="form-control" >
    </div>
    <img id="submit-new-meal" src="/resources/images/lips.png" (click)="submitNewMeal(mealName.value, mealDetails.value, mealCalories.value); mealName.value=''; mealDetails.value=''; mealCalories.value=''">
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitNewMeal(name: string, details: string, calories: number) {
    var newMeal: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMeal);
  }
}
