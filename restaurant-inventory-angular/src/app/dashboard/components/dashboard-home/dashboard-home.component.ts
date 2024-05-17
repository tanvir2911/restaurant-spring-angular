import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { InventoryServiceService } from './../../../service/inventory-service.service';

@Component({
  selector: 'restaurant-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent {
  users!: User[];
  userCount: number = 0;
  orders!: Order[];
  totalSell: number = 0;
  totalInventoryCost: number = 0;
  totalOrderCount: number = 0;
  cancelledOrderCount: number = 0;
  completedOrderCount: number = 0;
  constructor(
    private authService: AuthService,
    private orderService: OrderServiceService,
    private inventoryService: InventoryServiceService
  ) {
    this.getAllUsers();
    this.getAllOrders();
  }

  getInventories() {
    this.inventoryService.getAll().subscribe((res: any) => {
      for (let i of res) {
        this.totalInventoryCost += i.itemQuantity * i.unitCost;
      }
      console.log(this.totalInventoryCost);
    });
  }

  getAllUsers() {
    this.authService.getAll().subscribe((res: any) => {
      this.users = res;
      for (let user of this.users) {
        this.userCount++;
      }
    });
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
      for (let order of res) {
        this.totalSell += order.netAmount;
        this.totalOrderCount++;
      }
    });
    this.orderService.getAllCompletedOrders().subscribe((res: any) => {
      for (let completedOrder of res) {
        this.totalSell += completedOrder.netAmount;
        this.totalOrderCount++;
        this.completedOrderCount++;
      }
    });
    this.orderService.getAllCancelledOrders().subscribe((res: any) => {
      for (let cancelledOrder of res) {
        this.totalOrderCount++;
        this.cancelledOrderCount++;
      }
    });
  }
}
