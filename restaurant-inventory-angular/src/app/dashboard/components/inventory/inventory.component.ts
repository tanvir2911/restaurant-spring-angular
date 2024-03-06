import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';

@Component({
  selector: 'restaurant-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  inventories!: any;
  inventory!: any;
  constructor(
    private inventoryService: InventoryServiceService,
    private authService: AuthService
  ) {
    this.searchForm = new FormGroup({
      title: new FormControl(),
    });
    this.getInventories();
  }

  searchForm!: any;

  getInventories() {
    this.inventoryService.getAll().subscribe((res: any) => {
      this.inventories = res;
      for (let i = 0; i < this.inventories.length; i++) {
        this.authService
          .getUserById(this.inventories[i].userId)
          .subscribe((res: any) => {
            this.inventories[i].userFullName =
              res.firstName + ' ' + res.lastName;
          });
      }
    });

    console.log(this.inventories);
  }

  search() {
    console.log(this.searchForm.value);
  }
}
