import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h2>Edit Meal</h2>
    <label>Meal Name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Meal Details:</label>
    <input [(ngModel)]="childSelectedMeal.details">
    <label>Meal Calories:</label>
    <input [(ngModel)]="childSelectedMeal.calories">
    <button (click)="finishedEditing()">Submit</button>
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
