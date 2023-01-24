import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsListClientComponent } from './contracts-list-client.component';

describe('ContractsListClientComponent', () => {
  let component: ContractsListClientComponent;
  let fixture: ComponentFixture<ContractsListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
