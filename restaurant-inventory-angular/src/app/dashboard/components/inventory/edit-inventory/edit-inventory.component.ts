import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { InventoryServiceService } from 'src/app/service/inventory-service.service';

@Component({
  selector: 'restaurant-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.scss'],
})
export class EditInventoryComponent implements OnInit {
  id!: any;
  inventory!: any;
  user!: any;
  x!: any;

  inventoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    inventoryCategory: new FormControl(),
    itemName: new FormControl(),
    itemDescription: new FormControl(),
    itemQuantity: new FormControl(),
    unitCost: new FormControl(),
    enlistedBy: new FormControl(),
    enlistTime: new FormControl(),
    updatedBy: new FormControl(),
    updatedAt: new FormControl(),
  });

  constructor(
    private inventoryService: InventoryServiceService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['inventoryId'];

    this.getInventory();
  }
  getInventory() {
    this.inventoryService.getById(this.id).subscribe((res: any) => {
      this.inventory = res;
      console.log(res);

      this.inventoryForm.setValue(this.inventory);
      // this.authService
      //   .getUserById(this.inventory.userId)
      //   .subscribe((val: any) => {
      //     this.user = val;
      //     console.log(this.inventory);
      //   });
    });
  }
  update() {
    this.x = localStorage.getItem('user');
    this.x = JSON.parse(this.x);
    this.inventoryForm.value['updatedBy'] = this.x.id;
    console.log('update called', this.inventory);

    this.inventoryService
      .update(this.inventoryForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/dashboard/inventory');
      });
  }
}
