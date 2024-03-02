import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'restaurant-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  id: any;
  order!: Order;
  user!: any;
  constructor(
    private orderService: OrderServiceService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['orderId'];
    this.getOrder();
    // this.getCancelledOrder();
  }
  getOrder() {
    console.log('get order called');

    this.orderService.getOrderById(this.id).subscribe((res: any) => {
      console.log('inside getorderbyid', this.order);
      this.order = res;
      this.authService.getUserById(this.order.userId).subscribe((val: any) => {
        this.user = val;
        console.log(this.user);
      });
    });
  }

  cancelOrder() {
    this.order.orderStatus = 'cancelled';
    this.orderService.addToCancelledOrders(this.order).subscribe((res) => {});
    this.orderService.deleteById(this.order.id).subscribe((res) => {
      this.router.navigateByUrl('/dashboard/customersOrders');
    });
  }
  proceedOrder() {
    this.order.orderStatus = 'processing';
    this.orderService.updateOrder(this.order).subscribe((res) => {
      this.router.navigateByUrl('/dashboard/customersOrders');
    });
  }
  deliverOrder() {
    this.order.orderStatus = 'delivered';
    this.orderService.addToCompletedOrders(this.order).subscribe((res) => {});
    this.orderService.deleteById(this.order.id).subscribe((res) => {
      this.router.navigateByUrl('/dashboard/customersOrders');
    });
  }
}
