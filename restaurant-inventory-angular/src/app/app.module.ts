import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FoodItemComponent } from './components/food-items/food-item/food-item.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ChefsComponent } from './components/home/chefs/chefs.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/home/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CancelComponent } from './components/orders/checkout/cancel/cancel.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { InvoiceComponent } from './components/orders/checkout/invoice/invoice.component';
import { PrintLayoutComponent } from './components/orders/checkout/print-layout/print-layout.component';
import { StripeCheckoutComponent } from './components/orders/checkout/stripe-checkout/stripe-checkout.component';
import { SuccessComponent } from './components/orders/checkout/success/success.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TablesComponent } from './components/tables/tables.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

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
    TablesComponent,
    CancelComponent,
    SuccessComponent,
    StripeCheckoutComponent,
    PrintLayoutComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,

    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
