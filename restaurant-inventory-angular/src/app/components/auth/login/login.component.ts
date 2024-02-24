import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RestAPIService } from './../../../service/rest-api.service';

@Component({
  selector: 'restaurant-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    public apiService: RestAPIService
  ) {}
  ngOnInit(): void {
    this.authService.isLogin();
  }
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userPass: new FormControl(),
    remember_me: new FormControl(),
  });

  authList: any[] = [];
  login() {
    this.authService.getAll().subscribe((res: any) => {
      this.authList = res;
      console.log(this.authList);
      console.log(this.loginForm.value.userName);
      console.log(this.loginForm.value.userPass);

      let flag = false;
      for (let i = 0; i < this.authList.length; i++) {
        if (
          this.loginForm.value.userName === this.authList[i].userName &&
          this.loginForm.value.userPass === this.authList[i].password
        ) {
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('user', JSON.stringify(this.authList[i]));
          localStorage.setItem('role', this.authList[i].role);

          flag = true;
        }
      }

      if (flag === true) {
        this.apiService.changeMessage('true');
        this.router.navigateByUrl('/home');
      } else {
        alert('Incorrect Username or Password');
      }
    });
  }
}
