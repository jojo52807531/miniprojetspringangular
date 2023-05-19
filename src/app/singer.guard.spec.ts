import { TestBed } from '@angular/core/testing';

import { SingerGuard } from './singer.guard';

describe('SingerGuard', () => {
  let guard: SingerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
