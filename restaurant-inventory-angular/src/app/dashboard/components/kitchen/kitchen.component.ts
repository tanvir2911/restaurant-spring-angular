import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';
import { KitchenServiceService } from 'src/app/service/kitchen-service.service';
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
    private foodService: FoodServiceService,
    private inventoryService: InventoryServiceService,
    private kitchenService: KitchenServiceService
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
  inventories: any;

  filterFoodItems({ target: { value } }: any) {
    this.foodService.searchFoodItems(value).subscribe((res: any) => {
      this.foodItems = res;
    });
  }

  filterInventoryItems({ target: { value } }: any) {
    this.inventoryService.searchInventories(value).subscribe((res: any) => {
      this.inventories = res;
    });
  }

  getSearchedFoodItems(value: any) {
    this.foodService.searchFoodItems(value).subscribe((res: any) => {
      this.foodItems = res;
    });
  }

  sendToCounter() {}
}
