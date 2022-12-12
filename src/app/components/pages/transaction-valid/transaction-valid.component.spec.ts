import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionValidComponent } from './transaction-validation.component';

describe('TransactionValidComponent', () => {
  let component: TransactionValidComponent;
  let fixture: ComponentFixture<TransactionValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
