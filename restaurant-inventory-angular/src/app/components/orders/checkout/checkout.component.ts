import { Component } from '@angular/core';

@Component({
  selector: 'restaurant-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  printPage() {
    window.print();
  }
}
