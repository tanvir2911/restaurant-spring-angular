import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from 'src/app/model/foodItem';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'restaurant-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {
  // message!: FoodItem[];
  constructor(
    private orderService: OrderServiceService,
    private router: Router
  ) {}

  @Input() foodItems: FoodItem[] = [];

  itemQuant!: number;

  plus(quantity: number) {
    quantity++;
    this.itemQuant = quantity;
  }

  items!: FoodItem[];
  x!: any;

  addToOrder(foodItem: FoodItem) {
    if (localStorage.getItem('isLogin') === 'true') {
      this.x = localStorage.getItem('orders');
      if (!this.x) {
        this.items = [foodItem];
      } else {
        this.items = JSON.parse(this.x);

        this.items = [...this.items, foodItem];
      }

      localStorage.setItem('orders', JSON.stringify(this.items));
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
