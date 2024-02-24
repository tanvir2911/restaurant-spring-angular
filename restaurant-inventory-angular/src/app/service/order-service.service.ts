import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  constructor(private httpClient: HttpClient) {}

  private apiURL = 'http://localhost:8080/orders';
  private canceledOrdersAPIUrl = 'http://localhost:8080/cancelledOrders';
  private completedOrdersAPIUrl = 'http://localhost:8080/completedOrders';

  // private apiURL = 'http://localhost:3000/orders';
  // private canceledOrdersAPIUrl = 'http://localhost:3000/cancelledOrders';
  // private completedOrdersAPIUrl = 'http://localhost:3000/completedOrders';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addToOrders(order: Order) {
    return this.httpClient.post(this.apiURL, order);
  }

  getAllOrders() {
    return this.httpClient.get(this.apiURL);
  }

  getOrderById(id: any) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  updateOrder(order: Order) {
    return this.httpClient.put(this.apiURL + '/' + order.id, order);
  }

  // cancelled orders api

  getAllCancelledOrders() {
    return this.httpClient.get(this.canceledOrdersAPIUrl);
  }

  addToCancelledOrders(order: Order) {
    return this.httpClient.post(this.canceledOrdersAPIUrl, order);
  }

  getCancelledOrderById(id: any) {
    return this.httpClient.get(this.canceledOrdersAPIUrl + '/' + id);
  }

  // completed orders api
  getAllCompletedOrders() {
    return this.httpClient.get(this.completedOrdersAPIUrl);
  }

  addToCompletedOrders(order: Order) {
    return this.httpClient.post(this.completedOrdersAPIUrl, order);
  }

  // private message = new BehaviorSubject([]);
  // getMessage = this.message.asObservable();

  // setMessage(message: FoodItem[]) {
  //   // this.message.next(message);
  // }
}
