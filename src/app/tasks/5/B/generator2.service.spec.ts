import { TestBed } from '@angular/core/testing';

import { Generator2Service } from './generator2.service';

describe('Generator2Service', () => {
  let service: Generator2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generator2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
