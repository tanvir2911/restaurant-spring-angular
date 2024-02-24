import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FoodServiceService } from 'src/app/service/food-service.service';

@Component({
  selector: 'restaurant-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent {
  constructor(public foodApi: FoodServiceService) {}
  addMenuForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    foodImage: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(0),
  });

  onSubmit() {
    this.foodApi.addFoodItem(this.addMenuForm.value).subscribe((res) => {
      this.addMenuForm.reset();
    });
  }
}
