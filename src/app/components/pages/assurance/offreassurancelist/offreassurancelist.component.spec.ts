import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreassurancelistComponent } from './offreassurancelist.component';

describe('OffreassurancelistComponent', () => {
  let component: OffreassurancelistComponent;
  let fixture: ComponentFixture<OffreassurancelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreassurancelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreassurancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
