import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from '../service/rest-api.service';

@Component({
  selector: 'restaurant-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public apiService: RestAPIService, private router: Router) {}
  userName!: string;
  user: any;
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userName = this.user.firstName + ' ' + this.user.lastName;
  }
  logout() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('orders');
    this.apiService.changeMessage('false');
    this.router.navigateByUrl('/home');
  }
}
