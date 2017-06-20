import { TestBed, inject } from '@angular/core/testing';

import { RequestLoaderService } from './request-loader.service';

describe('RequestLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestLoaderService]
    });
  });

  it('should ...', inject([RequestLoaderService], (service: RequestLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
