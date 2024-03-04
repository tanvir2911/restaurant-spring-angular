import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrderComponent } from './components/orders/order/order.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { RestaurantTableAlignmentsComponent } from './components/restaurant-table-alignments/restaurant-table-alignments.component';
import { EditorComponent } from './components/restaurant-table-alignments/editor/editor.component';
import { CanvasComponent } from './components/restaurant-table-alignments/canvas/canvas.component';
import { TableComponent } from './components/restaurant-table-alignments/table/table.component';

@NgModule({
  declarations: [DashboardComponent, OrdersComponent, AddMenuComponent, OrderComponent, DashboardHomeComponent, RestaurantTableAlignmentsComponent, EditorComponent, CanvasComponent, TableComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
