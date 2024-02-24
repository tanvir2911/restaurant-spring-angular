import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { RestAPIService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'restaurant-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public apiService: RestAPIService,
    public authService: AuthService,
    private router: Router
  ) {
    // this.isLogin = localStorage.getItem('isLogin');
    console.log(this.isLogin);
  }

  userRole: any;
  userName: any;
  sharedMessage: string = '';
  subscription!: Subscription;
  // isLogin: any = '';
  ngOnInit(): void {
    this.isLogin();
    this.subscription = this.apiService.currentMessage.subscribe(
      (message) => (this.sharedMessage = message)
    );
    this.authService.isLogin();
    this.userName = localStorage.getItem('userName');
    this.userRole = localStorage.getItem('role');
  }
  logout() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('orders');
    this.apiService.changeMessage('false');
    this.router.navigateByUrl('/home');
  }
  isLogin() {
    let login = localStorage.getItem('isLogin');
    if (login == 'true') {
      this.apiService.changeMessage('true');
    }
  }
}
