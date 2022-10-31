import { TestBed } from '@angular/core/testing';

import { CreditLibreService } from './credit-libre.service';

describe('CreditLibreService', () => {
  let service: CreditLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
