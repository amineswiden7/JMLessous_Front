import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresAssureursComponent } from './offres-assureurs.component';

describe('OffresAssureursComponent', () => {
  let component: OffresAssureursComponent;
  let fixture: ComponentFixture<OffresAssureursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresAssureursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresAssureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
