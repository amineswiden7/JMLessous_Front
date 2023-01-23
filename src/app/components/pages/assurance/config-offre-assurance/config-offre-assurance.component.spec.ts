import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOffreAssuranceComponent } from './config-offre-assurance.component';

describe('ConfigOffreAssuranceComponent', () => {
  let component: ConfigOffreAssuranceComponent;
  let fixture: ComponentFixture<ConfigOffreAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigOffreAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOffreAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
