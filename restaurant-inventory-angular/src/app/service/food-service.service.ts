import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from '../model/foodItem';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor(private httpClient: HttpClient) {}
  private apiURL = 'http://localhost:8080/foodItems';
  // private apiURL = 'http://localhost:3000/foodItems';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addFoodItem(foodItem: FoodItem) {
    return this.httpClient.post(this.apiURL, foodItem);
  }

  getAllFoodItems() {
    return this.httpClient.get(this.apiURL);
  }

  searchFoodItems(query: string): Observable<any[]> {
    const url = `${this.apiURL}/search?query=${query}`;
    return this.httpClient.get<any[]>(url);
  }
}
