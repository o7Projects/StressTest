import { TestBed } from '@angular/core/testing';

import { StressTestService } from './stress-test.service';

describe('StressTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StressTestService = TestBed.get(StressTestService);
    expect(service).toBeTruthy();
  });
});
