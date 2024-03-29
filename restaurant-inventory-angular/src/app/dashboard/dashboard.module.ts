import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogModule } from '@angular/cdk/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptureModule } from 'ngx-capture';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddToInventoryComponent } from './components/add-to-inventory/add-to-inventory.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { EditInventoryComponent } from './components/inventory/edit-inventory/edit-inventory.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddToKitchenDialogComponent } from './components/kitchen/add-to-kitchen-dialog/add-to-kitchen-dialog.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CanvasComponent } from './components/restaurant-table-alignments/canvas/canvas.component';
import { EditorComponent } from './components/restaurant-table-alignments/editor/editor.component';
import { RestaurantTableAlignmentsComponent } from './components/restaurant-table-alignments/restaurant-table-alignments.component';
import { TableComponent } from './components/restaurant-table-alignments/table/table.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CreateDishesComponent } from './components/kitchen/create-dishes/create-dishes.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    AddMenuComponent,
    OrderComponent,
    DashboardHomeComponent,
    RestaurantTableAlignmentsComponent,
    EditorComponent,
    CanvasComponent,
    TableComponent,
    InventoryComponent,
    AddToInventoryComponent,
    EditInventoryComponent,
    KitchenComponent,
    AddToKitchenDialogComponent,
    CreateDishesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptureModule,
    DragDropModule,
    DialogModule,
  ],
})
export class DashboardModule {}
