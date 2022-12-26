import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantiteAchatComponent } from './quantite-achat.component';

describe('QuantiteAchatComponent', () => {
  let component: QuantiteAchatComponent;
  let fixture: ComponentFixture<QuantiteAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantiteAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantiteAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
