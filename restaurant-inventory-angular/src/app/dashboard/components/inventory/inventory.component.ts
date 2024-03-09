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
  searchQuery: string = '';
  searchResults: any[] = [];
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
          .getUserById(this.inventories[i].enlistedBy)
          .subscribe((res: any) => {
            this.inventories[i].userFullName =
              res.firstName + ' ' + res.lastName;
          });
        this.authService
          .getUserById(this.inventories[i].updatedBy)
          .subscribe((res: any) => {
            this.inventories[i].updaterFullName =
              res.firstName + ' ' + res.lastName;
          });
      }
    });

    console.log(this.inventories);
  }

  search() {
    this.inventoryService.searchInventories(this.searchQuery).subscribe(
      (data) => {
        this.searchResults = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
  deleteInventory(id: any) {
    this.inventoryService.deleteById(id).subscribe((res: any) => {
      this.getInventories();
    });
  }
}
