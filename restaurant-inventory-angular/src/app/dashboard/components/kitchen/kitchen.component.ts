import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'restaurant-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent {
  orders!: Order[];
  constructor(
    private orderService: OrderServiceService,
    private foodService: FoodServiceService
  ) {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
      console.log(this.orders);
    });
  }

  // name = 'Angular ' + VERSION.major;
  search: any;
  foodItems: any[] = [];
  searchResult: any;

  filterProducts({ target: { value } }: any) {
    // const filteredProducts = this.foodItems.filter((filtered: any) =>
    //   filtered.title.includes(value)
    // );
    this.foodService.searchFoodItems(value).subscribe((res: any) => {
      this.foodItems = res;
    });
    console.log(this.foodItems); // this prints the array of filtered
  }

  getSearchData(value: any) {
    this.foodService.searchFoodItems(value).subscribe((res: any) => {
      this.foodItems = res;
    });
  }
}
