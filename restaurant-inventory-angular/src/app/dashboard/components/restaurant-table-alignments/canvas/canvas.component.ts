import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'restaurant-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  tables: any[] = []; // Store tables with their positions

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tables, event.previousIndex, event.currentIndex);
  }
}
