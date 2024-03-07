import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryServiceService {
  constructor(private httpClient: HttpClient) {}

  private apiURL = 'http://localhost:8080/inventory';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  add(inventory: any) {
    return this.httpClient.post(this.apiURL, inventory);
  }

  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  searchInventories(query: string): Observable<any[]> {
    const url = `${this.apiURL}/search?query=${query}`;
    return this.httpClient.get<any[]>(url);
  }

  getById(id: any) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  update(inventory: any) {
    return this.httpClient.put(this.apiURL + '/' + inventory.id, inventory);
  }
}
