import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './components/add-menu/add-menu.component';

import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },
  {
    path: 'dash',
    component: DashboardHomeComponent,
  },
  { path: 'customersOrders', component: OrdersComponent },
  { path: 'customersOrders/:orderId', component: OrderComponent },
  { path: 'addItems', component: AddMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
