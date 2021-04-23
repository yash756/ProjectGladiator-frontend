import { TestBed } from '@angular/core/testing';

import { BiddercheckstatusService } from './biddercheckstatus.service';

describe('BiddercheckstatusService', () => {
  let service: BiddercheckstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiddercheckstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
