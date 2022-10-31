import { TestBed } from '@angular/core/testing';

import { OffreAssuranceService } from './offre-assurance.service';

describe('OffreAssuranceService', () => {
  let service: OffreAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
