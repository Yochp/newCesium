import { TestBed } from '@angular/core/testing';

import { SocektService } from './socekt.service';

describe('SocektService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocektService = TestBed.get(SocektService);
    expect(service).toBeTruthy();
  });
});
