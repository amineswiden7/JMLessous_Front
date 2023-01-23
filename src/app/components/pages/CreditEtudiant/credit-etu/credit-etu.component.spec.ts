import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditEtuComponent } from './credit-etu.component';

describe('CreditEtuComponent', () => {
  let component: CreditEtuComponent;
  let fixture: ComponentFixture<CreditEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditEtuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
