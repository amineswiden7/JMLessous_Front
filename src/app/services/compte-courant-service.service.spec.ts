import { TestBed } from '@angular/core/testing';

import { CompteCourantServiceService } from './compte-courant-service.service';

describe('CompteCourantServiceService', () => {
  let service: CompteCourantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteCourantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
