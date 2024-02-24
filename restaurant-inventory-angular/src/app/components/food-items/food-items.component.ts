import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/model/foodItem';
import { FoodServiceService } from 'src/app/service/food-service.service';

@Component({
  selector: 'restaurant-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss'],
})
export class FoodItemsComponent implements OnInit {
  public theBoundCallback!: Function;

  constructor(public foodApi: FoodServiceService) {}
  ngOnInit(): void {
    this.getAllFoods();
    this.theBoundCallback = this.plus.bind(this);
  }
  foodItems: FoodItem[] = [];
  getAllFoods() {
    this.foodApi.getAllFoodItems().subscribe((res: any) => {
      this.foodItems = res;
      console.log(this.foodItems);
    });
  }
  quantity: number = 0;
  plus() {
    return this.quantity++;
  }
}
