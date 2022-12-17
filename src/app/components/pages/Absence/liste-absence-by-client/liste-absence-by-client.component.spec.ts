import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAbsenceByClientComponent } from './liste-absence-by-client.component';

describe('ListeAbsenceByClientComponent', () => {
  let component: ListeAbsenceByClientComponent;
  let fixture: ComponentFixture<ListeAbsenceByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAbsenceByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAbsenceByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
