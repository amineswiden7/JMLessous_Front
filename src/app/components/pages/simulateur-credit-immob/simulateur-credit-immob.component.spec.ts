import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurCreditImmobComponent } from './simulateur-credit-immob.component';

describe('SimulateurCreditImmobComponent', () => {
  let component: SimulateurCreditImmobComponent;
  let fixture: ComponentFixture<SimulateurCreditImmobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateurCreditImmobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateurCreditImmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
