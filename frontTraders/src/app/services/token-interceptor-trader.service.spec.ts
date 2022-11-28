import { TestBed } from '@angular/core/testing';

import { TokenInterceptorTraderService } from './token-interceptor-trader.service';

describe('TokenInterceptorTraderService', () => {
  let service: TokenInterceptorTraderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorTraderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
