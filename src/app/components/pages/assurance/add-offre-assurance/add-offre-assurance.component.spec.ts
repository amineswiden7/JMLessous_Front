import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOffreAssuranceComponent } from './add-offre-assurance.component';

describe('AddOffreAssuranceComponent', () => {
  let component: AddOffreAssuranceComponent;
  let fixture: ComponentFixture<AddOffreAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOffreAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOffreAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
