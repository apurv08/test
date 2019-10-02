import { TestBed } from '@angular/core/testing';

import { RestoInfoService } from './resto-info.service';

describe('RestoInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestoInfoService = TestBed.get(RestoInfoService);
    expect(service).toBeTruthy();
  });
});
