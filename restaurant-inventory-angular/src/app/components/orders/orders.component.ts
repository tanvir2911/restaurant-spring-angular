import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodItem } from 'src/app/model/foodItem';
import { AuthService } from 'src/app/service/auth.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'restaurant-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  timeAddressForm: FormGroup = new FormGroup({
    time: new FormControl(),
    address: new FormControl(),
  });
  orders: FoodItem[] = [];
  x!: any;
  total: number = 0;
  order: any = {
    orderItems: [],
    netAmount: 0,
    userId: '',
    time: new Date(),
    address: '',
    orderStatus: 'pending',
  };
  constructor(
    private orderService: OrderServiceService,
    private authService: AuthService,
    private router: Router
  ) {
    this.x = localStorage.getItem('orders');
    if (this.x) {
      this.orders = JSON.parse(this.x);
      console.log(this.orders);

      for (let order of this.orders) {
        let i = Number.parseInt(order.price.toString());
        this.total += i;
      }
    }
  }

  deleteAOrder(inputOrder: FoodItem) {
    this.total = 0;
    this.x = localStorage.getItem('orders');
    this.orders = JSON.parse(this.x);
    this.orders = this.orders.filter((order) => order.id !== inputOrder.id);
    localStorage.setItem('orders', JSON.stringify(this.orders));
    for (let order of this.orders) {
      let i = Number.parseInt(order.price.toString());
      this.total += i;
    }
  }

  checkout() {
    this.x = localStorage.getItem('orders');
    if (this.x) {
      this.orders = JSON.parse(this.x);
      this.order.orderItems = this.orders.map((order) => order.title);
      console.log(this.order.orderItems);

      this.order.netAmount = this.total;
      this.x = localStorage.getItem('user');
      this.x = JSON.parse(this.x);
      this.order.userId = this.x.id;
      console.log(this.order.userId);

      this.order.time = this.timeAddressForm.value.time;
      this.order.address = this.timeAddressForm.value.address;
      this.orderService.addToOrders(this.order).subscribe((res) => {
        console.log('response:', res);
      });
      console.log(this.order);
      this.orders = [];
      this.total = 0;
      localStorage.removeItem('orders');
      this.router.navigateByUrl('/myorders/checkout');
    }
  }
}
