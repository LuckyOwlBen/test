import { TestBed } from '@angular/core/testing';

import { CombatDataService } from './combat-data.service';

describe('CombatDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombatDataService = TestBed.get(CombatDataService);
    expect(service).toBeTruthy();
  });
});
