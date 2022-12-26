import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCreditBackComponent } from './liste-credit-back.component';

describe('ListeCreditBackComponent', () => {
  let component: ListeCreditBackComponent;
  let fixture: ComponentFixture<ListeCreditBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCreditBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCreditBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
