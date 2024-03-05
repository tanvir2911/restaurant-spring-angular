import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FileServiceService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  private apiURL = 'http://localhost:8080/files';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(file: any) {
    return this.httpClient.post(`${this.apiURL}/image/fileSystem`, file);
  }

  // updateData(user: any) {
  //   console.log('Call from service', user.email);
  //   return this.httpClient.put(this.apiURL + '/' + user.id, user);
  // }

  // getAll() {
  //   console.log('getAll called');

  //   return this.httpClient.get(this.apiURL);
  // }
}
