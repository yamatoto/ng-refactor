import { TestBed } from '@angular/core/testing';
import { SessionHttpService } from './session-http.service';

describe('SessionHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionHttpService = TestBed.get(SessionHttpService);
    expect(service).toBeTruthy();
  });
});
