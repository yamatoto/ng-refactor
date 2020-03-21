import { TestBed } from '@angular/core/testing';

import { OriginCountriesHttpService } from './origin-countries-http.service';

describe('OriginCountriesHttpService', () => {
  let service: OriginCountriesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OriginCountriesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
