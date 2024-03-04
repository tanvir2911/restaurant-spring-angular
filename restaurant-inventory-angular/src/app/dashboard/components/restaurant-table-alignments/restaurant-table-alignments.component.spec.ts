import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableAlignmentsComponent } from './restaurant-table-alignments.component';

describe('RestaurantTableAlignmentsComponent', () => {
  let component: RestaurantTableAlignmentsComponent;
  let fixture: ComponentFixture<RestaurantTableAlignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTableAlignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTableAlignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
