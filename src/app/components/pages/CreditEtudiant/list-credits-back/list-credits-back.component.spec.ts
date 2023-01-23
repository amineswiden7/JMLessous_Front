import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditsBackComponent } from './list-credits-back.component';

describe('ListCreditsBackComponent', () => {
  let component: ListCreditsBackComponent;
  let fixture: ComponentFixture<ListCreditsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
