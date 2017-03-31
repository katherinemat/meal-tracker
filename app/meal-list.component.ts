import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <h2>All Meals</h2>
  <h4>Filter meals</h4>
  <!-- the event syntax is this way because its a select/dropdown form -->
  <select (change)="filterChange($event.target.value)">
    <option value="none" selected="selected">No filter</option>
    <option value="less">Less than 500 calories</option>
    <option value="more">500 or more calories</option>
  </select>

  <ul>
    <li *ngFor="let meal of childMeals | caloriesPipe:filterByCalories">{{meal.name}}, {{meal.calories}} calories: {{meal.details}}
    <button (click)="editSelectedMeal(meal)">Edit this meal</button>
    </li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMeals: Meal[];
  @Output() selectSender = new EventEmitter();

  editSelectedMeal(meal: Meal) {
    this.selectSender.emit(meal);
  }

  //pipe to filter by calories
  filterByCalories: string = "none";

  filterChange(option) {
    this.filterByCalories = option;
  }
}
