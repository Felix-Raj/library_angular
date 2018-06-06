import { TestBed, inject } from '@angular/core/testing';

import { LentService } from './lent.service';

describe('LentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LentService]
    });
  });

  it('should be created', inject([LentService], (service: LentService) => {
    expect(service).toBeTruthy();
  }));
});
