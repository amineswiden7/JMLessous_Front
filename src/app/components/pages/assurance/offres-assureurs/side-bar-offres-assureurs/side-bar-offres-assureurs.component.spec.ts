import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarOffresAssureursComponent } from './side-bar-offres-assureurs.component';

describe('SideBarOffresAssureursComponent', () => {
  let component: SideBarOffresAssureursComponent;
  let fixture: ComponentFixture<SideBarOffresAssureursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarOffresAssureursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarOffresAssureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
