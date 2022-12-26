import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOffreAssurListComponent } from './bank-offre-assur-list.component';

describe('BankOffreAssurListComponent', () => {
  let component: BankOffreAssurListComponent;
  let fixture: ComponentFixture<BankOffreAssurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankOffreAssurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOffreAssurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
