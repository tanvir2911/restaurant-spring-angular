import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogData } from 'src/app/model/dialogData';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';
import { KitchenServiceService } from 'src/app/service/kitchen-service.service';

@Component({
  selector: 'restaurant-add-to-kitchen-dialog',
  templateUrl: './add-to-kitchen-dialog.component.html',
  styleUrls: ['./add-to-kitchen-dialog.component.scss'],
})
export class AddToKitchenDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: DialogData,
    private inventoryService: InventoryServiceService,
    private kitchenService: KitchenServiceService
  ) {
    this.id = data.id;
    this.getInventory();
  }
  id!: any;
  inventory!: any;
  user!: any;
  x!: any;
  inventoryForm: FormGroup = new FormGroup({
    itemQuantity: new FormControl(),
  });

  getInventory() {
    this.inventoryService.getById(this.id).subscribe((res: any) => {
      this.inventory = res;
      console.log(res);
    });
  }

  addToKitchen() {
    this.inventory.itemQuantity = this.inventoryForm.value.itemQuantity;
    console.log(this.inventory);

    this.kitchenService.update(this.inventory).subscribe((res: any) => {});

    this.inventory.itemQuantity =
      this.data.itemQuantity - this.inventoryForm.value.itemQuantity;

    this.inventoryService.update(this.inventory).subscribe((res: any) => {
      console.log(res);
    });
  }
}
