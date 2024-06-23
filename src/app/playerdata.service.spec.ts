import { TestBed } from '@angular/core/testing';

import { PlayerdataService } from './playerdata.service';

describe('PlayerdataService', () => {
  let service: PlayerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
