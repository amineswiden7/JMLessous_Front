import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreValidationComponent } from './offre-validation.component';

describe('OffreValidationComponent', () => {
  let component: OffreValidationComponent;
  let fixture: ComponentFixture<OffreValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
