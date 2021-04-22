import { TestBed } from '@angular/core/testing';

import { ApproveClaimService } from './approve-claim.service';

describe('ApproveClaimService', () => {
  let service: ApproveClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
