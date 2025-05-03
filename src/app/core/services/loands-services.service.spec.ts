import { TestBed } from '@angular/core/testing';

import { LoandsServicesService } from './loands-services.service';

describe('LoandsServicesService', () => {
  let service: LoandsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoandsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
