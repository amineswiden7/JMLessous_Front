import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAmorComponent } from './tab-amor.component';

describe('TabAmorComponent', () => {
  let component: TabAmorComponent;
  let fixture: ComponentFixture<TabAmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAmorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
