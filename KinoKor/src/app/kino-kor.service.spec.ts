import { TestBed } from '@angular/core/testing';

import { KinoKorService } from './kino-kor.service';

describe('KinoKorService', () => {
  let service: KinoKorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinoKorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
