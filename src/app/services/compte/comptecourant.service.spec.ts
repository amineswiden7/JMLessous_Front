import { TestBed } from '@angular/core/testing';

import { ComptecourantService } from './comptecourant.service';

describe('ComptecourantService', () => {
  let service: ComptecourantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptecourantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
