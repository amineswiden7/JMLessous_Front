import { TestBed } from '@angular/core/testing';

import { ProduitFinancierService } from './produit-financier.service';

describe('ProduitFinancierService', () => {
  let service: ProduitFinancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitFinancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
