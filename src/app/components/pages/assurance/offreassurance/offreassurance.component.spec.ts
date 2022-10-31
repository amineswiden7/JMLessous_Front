import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreassuranceComponent } from './offreassurance.component';

describe('OffreassuranceComponent', () => {
  let component: OffreassuranceComponent;
  let fixture: ComponentFixture<OffreassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
