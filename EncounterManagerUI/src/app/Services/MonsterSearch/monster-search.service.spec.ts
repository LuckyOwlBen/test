import { TestBed } from '@angular/core/testing';

import { MonsterSearchService } from './monster-search.service';

describe('MonsterSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterSearchService = TestBed.get(MonsterSearchService);
    expect(service).toBeTruthy();
  });
});
