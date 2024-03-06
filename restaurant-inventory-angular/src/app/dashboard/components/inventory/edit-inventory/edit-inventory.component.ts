import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';

@Component({
  selector: 'restaurant-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.scss'],
})
export class EditInventoryComponent {
  inventoryForm!: any;
  id: any;
  inventory: any = {
    userId: '',
    inventoryCategory: '',
    itemName: '',
    itemDescription: '',
    itemQuantity: '',
    unitCost: '',
  };
  user!: any;
  constructor(
    private inventoryService: InventoryServiceService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['inventoryId'];
    this.getInventory();
    this.inventoryForm = new FormGroup({
      inventoryCategory: new FormControl(),
      itemName: new FormControl(),
      itemDescription: new FormControl(),
      itemQuantity: new FormControl(),
      unitCost: new FormControl(),
    });
    // this.getCancelledOrder();
  }

  getInventory() {
    this.inventoryService.getById(this.id).subscribe((res: any) => {
      this.inventory = res;
      this.inventoryForm.setValue(res);
      this.authService
        .getUserById(this.inventory.userId)
        .subscribe((val: any) => {
          this.user = val;
        });
    });
  }
  update() {
    // this.inventoryService.update(this.inventory).subscribe((res: any) => {
    //   this.router.navigateByUrl('/dashboard/inventory');
    // });
  }
}
