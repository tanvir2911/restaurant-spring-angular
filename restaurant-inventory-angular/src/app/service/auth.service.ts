import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  private apiURL = 'http://localhost:8080/auth';
  // private apiURL = 'http://localhost:3000/auth';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  addData(user: any) {
    console.log('Call from service', user.email);
    return this.httpClient.post(this.apiURL, user);
  }

  updateData(user: any) {
    console.log('Call from service', user.email);
    return this.httpClient.put(this.apiURL + '/' + user.id, user);
  }

  getAll() {
    console.log('getAll called');

    return this.httpClient.get(this.apiURL);
  }

  getUserById(id: any) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  isLogin() {
    let login = localStorage.getItem('isLogin');
    if (login === 'true') {
      this.router.navigateByUrl('/home');
    } else {
      // this.router.navigateByUrl('/login');
    }
  }
  // editData(id: any) {
  //   console.log('editData() called');

  //   return this.httpClient.get(this.apiURL + '/' + id);
  // }

  // editForm(user: User) {
  //   console.log('editForm called', user.id);
  //   return this.httpClient.post(this.apiURL, user);
  // }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  authList: any[] = [];
  login(auth: any) {
    const authList: any = this.getAll();
    for (let i = 0; i < authList.length; i++) {
      if (
        auth.username === authList[i].username &&
        auth.password === authList[i].password
      ) {
        localStorage.setItem('userLogin', 'true');
      }
    }
  }

  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {}
}
