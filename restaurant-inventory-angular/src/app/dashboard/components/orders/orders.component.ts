import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'restaurant-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  orders!: Order[];
  completedOrders!: Order[];
  cancelledOrders!: Order[];

  constructor(private orderService: OrderServiceService) {
    this.getOrders();
    this.getCompletedOrders();
    this.getCancelledOrders();
  }
  getOrders() {
    this.orderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
      console.log(this.orders);
    });
  }

  getCompletedOrders() {
    this.orderService.getAllCompletedOrders().subscribe((res: any) => {
      this.completedOrders = res;
    });
  }

  getCancelledOrders() {
    this.orderService.getAllCancelledOrders().subscribe((res: any) => {
      this.cancelledOrders = res;
    });
  }
}
