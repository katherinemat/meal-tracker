import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <div class="titles">
    <h2>My Meals</h2>
  </div>

  <div id="filter">
    <h4>Filter meals</h4>
    <!-- the event syntax is this way because its a select/dropdown form -->
    <select (change)="filterChange($event.target.value)">
      <option value="none" selected="selected">No filter</option>
      <option value="less">Less than 500 calories</option>
      <option value="more">500 or more calories</option>
    </select>
  </div>

  <ul>
    <li  (click)="editSelectedMeal(meal)" *ngFor="let meal of childMeals | caloriesPipe:filterByCalories">
      <div class="row">
        <div class="col-xs-7">
          <p class="meal-details">{{meal.details}}</p>
          <p class="meal-calories">{{meal.calories}} calories</p>
        </div>
        <div class="col-xs-5">
          <h3 class="meal-name">{{meal.name}}</h3>
        </div>
      </div>
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
