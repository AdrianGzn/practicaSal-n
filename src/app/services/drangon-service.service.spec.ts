import { TestBed } from '@angular/core/testing';

import { DrangonServiceService } from './drangon-service.service';

describe('DrangonServiceService', () => {
  let service: DrangonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrangonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
