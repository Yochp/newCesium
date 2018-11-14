import { TestBed } from '@angular/core/testing';

import { PointSService } from './point-s.service';

describe('PointSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointSService = TestBed.get(PointSService);
    expect(service).toBeTruthy();
  });
});
