import { TestBed } from '@angular/core/testing';

import { Ng7CommonService } from './ng7-common.service';

describe('Ng7CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7CommonService = TestBed.get(Ng7CommonService);
    expect(service).toBeTruthy();
  });
});
