import { TestBed } from '@angular/core/testing';

import { RequestCropService } from './request-crop.service';

describe('RequestCropService', () => {
  let service: RequestCropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
