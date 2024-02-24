import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestAPIService {
  constructor(private httpClient: HttpClient) {}

  // private apiURL = 'http://localhost:3000/posts';
  private apiURL = 'http://localhost:8080/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  // addData(user: User) {
  //   console.log('Call from service', user.email);
  //   return this.httpClient.post(this.apiURL, user);
  // }

  // updateData(user: User) {
  //   console.log('Call from service', user.email);
  //   return this.httpClient.put(this.apiURL + '/' + user.id, user);
  // }

  // getAll() {
  //   console.log('getAll called');

  //   return this.httpClient.get(this.apiURL);
  // }

  // getUserById(id: any) {
  //   console.log('editData() called');

  //   return this.httpClient.get(this.apiURL + '/' + id);
  // }

  // editData(id: any) {
  //   console.log('editData() called');

  //   return this.httpClient.get(this.apiURL + '/' + id);
  // }

  // editForm(user: User) {
  //   console.log('editForm called', user.id);
  //   return this.httpClient.post(this.apiURL, user);
  // }

  // deleteById(id: any) {
  //   return this.httpClient.delete(this.apiURL + '/' + id);
  // }

  // shared message
  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
