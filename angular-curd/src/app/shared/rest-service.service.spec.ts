import { TestBed } from '@angular/core/testing';

import { RestServiceService } from './rest-service.service';

describe('RestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestServiceService = TestBed.get(RestServiceService);
    expect(service).toBeTruthy();
  });
});
