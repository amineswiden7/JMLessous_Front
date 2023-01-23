import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueSComponent } from './dialogue-s.component';

describe('DialogueSComponent', () => {
  let component: DialogueSComponent;
  let fixture: ComponentFixture<DialogueSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
