import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortfeuilleComponent } from './add-portfeuille.component';

describe('AddPortfeuilleComponent', () => {
  let component: AddPortfeuilleComponent;
  let fixture: ComponentFixture<AddPortfeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPortfeuilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
