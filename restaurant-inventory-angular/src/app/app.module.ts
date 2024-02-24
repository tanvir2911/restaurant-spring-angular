import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FoodItemComponent } from './components/food-items/food-item/food-item.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ChefsComponent } from './components/home/chefs/chefs.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    NavbarComponent,
    FoodItemsComponent,
    FoodItemComponent,
    OrdersComponent,
    CheckoutComponent,
    FooterComponent,
    ServicesComponent,
    ChefsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
