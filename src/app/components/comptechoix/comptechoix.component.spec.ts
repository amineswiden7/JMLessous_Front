import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptechoixComponent } from './comptechoix.component';

describe('ComptechoixComponent', () => {
  let component: ComptechoixComponent;
  let fixture: ComponentFixture<ComptechoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptechoixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptechoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
