import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestAPIService } from './service/rest-api.service';

@Component({
  selector: 'restaurant-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public apiService: RestAPIService) {}

  sharedMessage: string = '';
  subscription!: Subscription;
  ngOnInit(): void {
    this.isLogin();
    this.subscription = this.apiService.currentMessage.subscribe(
      (message) => (this.sharedMessage = message)
    );
  }

  isLogin() {
    let login = localStorage.getItem('isLogin');
    if (login == 'true') {
      this.apiService.changeMessage('true');
    }
  }
}
