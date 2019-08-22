import { TestBed } from '@angular/core/testing';

import { Ng8MaterialService } from './ng8-material.service';

describe('Ng8MaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng8MaterialService = TestBed.get(Ng8MaterialService);
    expect(service).toBeTruthy();
  });
});
