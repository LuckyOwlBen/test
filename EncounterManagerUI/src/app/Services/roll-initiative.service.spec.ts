import { TestBed } from '@angular/core/testing';

import { RollInitiativeService } from './roll-initiative.service';

describe('RollInitiativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollInitiativeService = TestBed.get(RollInitiativeService);
    expect(service).toBeTruthy();
  });
});
