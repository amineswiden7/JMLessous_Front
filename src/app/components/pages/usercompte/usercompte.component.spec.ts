import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompteComponent } from './usercompte.component';

describe('UsercompteComponent', () => {
  let component: UsercompteComponent;
  let fixture: ComponentFixture<UsercompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
