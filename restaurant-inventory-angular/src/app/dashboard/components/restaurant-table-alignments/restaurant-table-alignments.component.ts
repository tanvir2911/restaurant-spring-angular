import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'restaurant-restaurant-table-alignments',
  templateUrl: './restaurant-table-alignments.component.html',
  styleUrls: ['./restaurant-table-alignments.component.scss'],
})
export class RestaurantTableAlignmentsComponent {
  constructor() {
    this.createTableForm = new FormGroup({
      tableId: new FormControl(''),
      capacity: new FormControl(''),
      serviceCharge: new FormControl(''),
      position: new FormControl(''),
    });
  }

  createTableForm!: any;

  tables!: any[];
  table: any = {};

  createTable() {
    this.table = this.createTableForm.value;
    this.tables.push(this.table);
  }

  // deleteTable(e: any) {
  //   for (let i = 0; i < this.tables.length; i++) {
  //     if (this.tables[i].tableId == e) {
  //       this.tables.splice(i, 1);
  //     }
  //   }
  // }

  saveDiagram() {}
}
