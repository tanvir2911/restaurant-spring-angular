import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'restaurant-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(public authService: AuthService, private router: Router) {}
  signupForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    termsOfService: new FormControl(),

    role: new FormControl(''),
  });

  // checkPass() {
  //   if (
  //     this.signupForm.value.password === this.signupForm.value.confirmPassword
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }
  signUp() {
    console.log(this.signupForm.value);

    this.authService.addData(this.signupForm.value).subscribe((res: any) => {
      console.log('post created successfully');
      this.router.navigateByUrl('/login');
    });
  }

  clear() {
    this.signupForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      email: new FormControl(''),
      checked: new FormControl(''),
      pass: new FormControl(''),
    });
  }
}
