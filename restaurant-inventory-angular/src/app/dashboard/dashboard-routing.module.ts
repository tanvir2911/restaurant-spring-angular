import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './components/add-menu/add-menu.component';

import { AddToInventoryComponent } from './components/add-to-inventory/add-to-inventory.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { EditInventoryComponent } from './components/inventory/edit-inventory/edit-inventory.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RestaurantTableAlignmentsComponent } from './components/restaurant-table-alignments/restaurant-table-alignments.component';

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
  { path: 'inventory/:inventoryId', component: EditInventoryComponent },
  { path: 'addItems', component: AddMenuComponent },
  {
    path: 'restaurantTableAlignments',
    component: RestaurantTableAlignmentsComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'addToInventory',
    component: AddToInventoryComponent,
  },
  {
    path: 'kitchen',
    component: KitchenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
