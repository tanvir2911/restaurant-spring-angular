import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { DishServiceService } from 'src/app/service/dish-service.service';

@Component({
  selector: 'restaurant-create-dishes',
  templateUrl: './create-dishes.component.html',
  styleUrls: ['./create-dishes.component.scss'],
})
export class CreateDishesComponent {
  constructor(
    private fb: FormBuilder,
    private dishService: DishServiceService
  ) {}
  dishForm = this.fb.group({
    items: this.fb.array([]),
    dishName: new FormControl(''),
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
        ingredientName: [''],
        measuringAmount: [''],
        measuringUnit: [''],
      })
    );
  }

  save() {
    console.log(this.dishForm.value);
    this.dishService.add(this.dishForm.value).subscribe((res: any) => {});
  }

  dishes: any;

  searchDishes({ target: { value } }: any) {
    this.dishService.searchDishes(value).subscribe((res: any) => {
      this.dishes = res;
    });
  }
}
