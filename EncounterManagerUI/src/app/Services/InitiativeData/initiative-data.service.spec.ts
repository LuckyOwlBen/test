import { TestBed } from '@angular/core/testing';

import { InitiativeDataService } from './initiative-data.service';

describe('InitiativeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitiativeDataService = TestBed.get(InitiativeDataService);
    expect(service).toBeTruthy();
  });
});
