import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <div class="titles">
      <h2>Edit Meal</h2>
    </div>
    <div class="form form-inline">
      <div class="form-group">
        <label>Meal Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="form-group">
        <label>Meal Details:</label>
        <textarea class="form-control" [(ngModel)]="childSelectedMeal.details" maxlength="180"></textarea>
      </div>
      <div class="form-group">
        <label>Meal Calories:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <img id="submit-new-meal" src="/resources/images/lips.png" (click)="finishedEditing()">
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() editSender = new EventEmitter();

  finishedEditing() {
    this.editSender.emit();
  }
}
