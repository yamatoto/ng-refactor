import { TestBed } from '@angular/core/testing';

import { CompositionsHttpService } from './compositions-http.service';

describe('CompositionsHttpService', () => {
  let service: CompositionsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompositionsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
