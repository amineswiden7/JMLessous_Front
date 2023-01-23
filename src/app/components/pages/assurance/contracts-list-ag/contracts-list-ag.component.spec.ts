import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsListAgComponent } from './contracts-list-ag.component';

describe('ContractsListAgComponent', () => {
  let component: ContractsListAgComponent;
  let fixture: ComponentFixture<ContractsListAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsListAgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsListAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
