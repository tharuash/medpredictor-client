import { TestBed } from '@angular/core/testing';

import { Route.GuardService } from './route.guard.service';

describe('Route.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Route.GuardService = TestBed.get(Route.GuardService);
    expect(service).toBeTruthy();
  });
});
