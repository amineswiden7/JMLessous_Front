import { TestBed } from '@angular/core/testing';

import { CompteepargneService } from './compteepargne.service';

describe('CompteepargneService', () => {
  let service: CompteepargneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteepargneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
