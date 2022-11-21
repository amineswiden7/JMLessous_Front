import { TestBed } from '@angular/core/testing';

import { PortfeuilleService } from './portfeuille.service';

describe('PortfeuilleService', () => {
  let service: PortfeuilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfeuilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
