import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLibreComponent } from './credit-libre.component';

describe('CreditLibreComponent', () => {
  let component: CreditLibreComponent;
  let fixture: ComponentFixture<CreditLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
