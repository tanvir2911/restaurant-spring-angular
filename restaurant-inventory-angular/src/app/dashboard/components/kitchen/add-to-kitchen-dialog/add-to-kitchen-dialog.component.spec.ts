import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToKitchenDialogComponent } from './add-to-kitchen-dialog.component';

describe('AddToKitchenDialogComponent', () => {
  let component: AddToKitchenDialogComponent;
  let fixture: ComponentFixture<AddToKitchenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToKitchenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToKitchenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
