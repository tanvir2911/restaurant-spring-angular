import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';

@Component({
  selector: 'restaurant-add-to-inventory',
  templateUrl: './add-to-inventory.component.html',
  styleUrls: ['./add-to-inventory.component.scss'],
})
export class AddToInventoryComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private inventoryService: InventoryServiceService
  ) {
    this.inventoryForm = new FormGroup({
      inventoryCategory: new FormControl(),
      itemName: new FormControl(),
      itemDescription: new FormControl(),
      itemQuantity: new FormControl(),
      unitCost: new FormControl(),
      unitType: new FormControl(),
    });
  }

  inventoryForm!: any;
  x!: any;
  // inventory: any;
  inventory: any = {
    enlistedBy: '',
    inventoryCategory: '',
    itemName: '',
    itemDescription: '',
    itemQuantity: '',
    unitCost: '',
    unitType: '',
  };
  addInventory() {
    this.x = localStorage.getItem('user');
    this.x = JSON.parse(this.x);
    this.inventory.enlistedBy = this.x.id;
    this.inventory.inventoryCategory =
      this.inventoryForm.value.inventoryCategory;
    this.inventory.itemName = this.inventoryForm.value.itemName;
    this.inventory.itemDescription = this.inventoryForm.value.itemDescription;
    this.inventory.itemQuantity = this.inventoryForm.value.itemQuantity;
    this.inventory.unitCost = this.inventoryForm.value.unitCost;
    this.inventory.unitType = this.inventoryForm.value.unitType;
    this.inventoryService.add(this.inventory).subscribe((res) => {});
    this.clear();
  }

  clear() {
    this.inventoryForm = new FormGroup({
      inventoryCategory: new FormControl(),
      itemName: new FormControl(),
      itemDescription: new FormControl(),
      itemQuantity: new FormControl(),
      unitCost: new FormControl(),
    });
  }
}
