import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'restaurant-create-dishes',
  templateUrl: './create-dishes.component.html',
  styleUrls: ['./create-dishes.component.scss'],
})
export class CreateDishesComponent {
  constructor(private fb: FormBuilder) {}
  dishForm = this.fb.group({
    items: this.fb.array([]),
  });

  get items() {
    return this.dishForm.get('items') as FormArray;
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  addItem() {
    this.items.push(
      this.fb.group({
        name: [''],
        age: [''],
      })
    );
  }
}
