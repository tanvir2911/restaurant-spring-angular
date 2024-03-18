import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { FoodServiceService } from 'src/app/service/food-service.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';
import { KitchenServiceService } from 'src/app/service/kitchen-service.service';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { AddToKitchenDialogComponent } from './add-to-kitchen-dialog/add-to-kitchen-dialog.component';

@Component({
  selector: 'restaurant-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent {
  orders!: Order[];
  constructor(
    private router: Router,
    private orderService: OrderServiceService,
    private foodService: FoodServiceService,
    private inventoryService: InventoryServiceService,
    private kitchenService: KitchenServiceService,
    public dialog: Dialog
  ) {
    this.getOrders();
    this.getAllKitchenItems();
  }

  getAllKitchenItems() {
    this.kitchenService.getAll().subscribe((res: any) => {
      this.kitchenItems = res;
    });
  }

  openDialog(inventory: any) {
    this.dialog.open(AddToKitchenDialogComponent, {
      minWidth: '300px',
      data: {
        itemQuantity: inventory.itemQuantity,
        id: inventory.id,
        itemName: inventory.itemName,
      },
    });
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
  kitchenItems: any;
  id: any;
  order: any;
  user!: any;

  deliverToCounterOrder(order: any) {
    console.log(order);

    order.orderStatus = 'delivered';
    this.orderService.addToCompletedOrders(order).subscribe((res) => {});
    this.orderService.deleteById(order.id).subscribe((res) => {});
    console.log(order);
  }

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

  goToCreateDish() {
    this.router.navigateByUrl('dashboard/createDishes');
  }

  sendToCounter() {}
}
