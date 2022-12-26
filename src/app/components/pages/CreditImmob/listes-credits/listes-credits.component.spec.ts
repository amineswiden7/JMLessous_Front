import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesCreditsComponent } from './listes-credits.component';

describe('ListesCreditsComponent', () => {
  let component: ListesCreditsComponent;
  let fixture: ComponentFixture<ListesCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
