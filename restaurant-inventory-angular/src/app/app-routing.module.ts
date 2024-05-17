import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/home/services/services.component';
import { CancelComponent } from './components/orders/checkout/cancel/cancel.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { InvoiceComponent } from './components/orders/checkout/invoice/invoice.component';
import { PrintLayoutComponent } from './components/orders/checkout/print-layout/print-layout.component';
import { StripeCheckoutComponent } from './components/orders/checkout/stripe-checkout/stripe-checkout.component';
import { SuccessComponent } from './components/orders/checkout/success/success.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TablesComponent } from './components/tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'menu',
    component: FoodItemsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'myorders',
    component: OrdersComponent,
  },
  {
    path: 'myorders/checkout',
    component: CheckoutComponent,
  },
  {
    path: 'checkout',
    component: StripeCheckoutComponent,
  },
  { path: 'cancel', component: CancelComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'print', component: PrintLayoutComponent },
  { path: 'print/invoice', component: InvoiceComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
  },
  // {
  //   path: '**',
  //   component: HomeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
