import { TestBed } from '@angular/core/testing';

import { AuthTraderGuard } from './auth-trader.guard';

describe('AuthTraderGuard', () => {
  let guard: AuthTraderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTraderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
