import { TestBed, inject } from '@angular/core/testing';

import { PersoonService } from './persoon.service';

describe('PersoonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersoonService]
    });
  });

  it('should be created', inject([PersoonService], (service: PersoonService) => {
    expect(service).toBeTruthy();
  }));
});
