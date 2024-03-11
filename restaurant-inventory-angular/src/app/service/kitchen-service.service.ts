import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KitchenServiceService {
  constructor(private httpClient: HttpClient) {}

  private apiURL = 'http://localhost:8080/kitchen';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  add(kitchen: any) {
    return this.httpClient.post(this.apiURL, kitchen);
  }

  getAll() {
    return this.httpClient.get(this.apiURL);
  }

  search(query: string): Observable<any[]> {
    const url = `${this.apiURL}/search?query=${query}`;
    return this.httpClient.get<any[]>(url);
  }

  getById(id: any) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  update(kitchen: any) {
    return this.httpClient.put(this.apiURL + '/' + kitchen.id, kitchen);
  }
}
