import { TestBed } from '@angular/core/testing';

import { AllSvcService } from './all-svc.service';

describe('AllSvcService', () => {
  let service: AllSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
