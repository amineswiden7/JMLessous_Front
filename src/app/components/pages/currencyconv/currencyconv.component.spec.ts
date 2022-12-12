import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconvComponent } from './currencyconv.component';

describe('CurrencyconvComponent', () => {
  let component: CurrencyconvComponent;
  let fixture: ComponentFixture<CurrencyconvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
