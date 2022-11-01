import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreassurancedetailComponent } from './offreassurancedetail.component';

describe('OffreassurancedetailComponent', () => {
  let component: OffreassurancedetailComponent;
  let fixture: ComponentFixture<OffreassurancedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreassurancedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreassurancedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
