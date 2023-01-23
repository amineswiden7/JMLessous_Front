import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompteEpComponent } from './usercompte-ep.component';

describe('UsercompteEpComponent', () => {
  let component: UsercompteEpComponent;
  let fixture: ComponentFixture<UsercompteEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercompteEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompteEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
