import { TestBed } from '@angular/core/testing';

import { PillarService } from './pillar.service';

describe('PillarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PillarService = TestBed.get(PillarService);
    expect(service).toBeTruthy();
  });
});
