import { TestBed } from '@angular/core/testing';

import { AfflictionServiceService } from './affliction-service.service';

describe('AfflictionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfflictionServiceService = TestBed.get(AfflictionServiceService);
    expect(service).toBeTruthy();
  });
});
