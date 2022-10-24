import { TestBed } from '@angular/core/testing';

import { CoursactionsService } from './coursactions.service';

describe('CoursactionsService', () => {
  let service: CoursactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
