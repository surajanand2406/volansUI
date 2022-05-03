/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonUtilService } from './common-util.service';

describe('Service: CommonUtil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonUtilService]
    });
  });

  it('should ...', inject([CommonUtilService], (service: CommonUtilService) => {
    expect(service).toBeTruthy();
  }));
});
