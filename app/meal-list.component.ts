import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <h2>All Meals</h2>
  <ul>
    <li *ngFor="let meal of childMeals">{{meal.name}}, {{meal.calories}} calories: {{meal.details}}
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
}
