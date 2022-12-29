import { TestBed } from '@angular/core/testing';

import { GameHeaderInterceptor } from './game-header.interceptor';

describe('GameHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GameHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GameHeaderInterceptor = TestBed.inject(GameHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
