import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheactionsComponent } from './marcheactions.component';

describe('MarcheactionsComponent', () => {
  let component: MarcheactionsComponent;
  let fixture: ComponentFixture<MarcheactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcheactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcheactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
