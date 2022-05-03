/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataTransmitService } from './data-transmit.service';

describe('Service: DataTransmit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransmitService]
    });
  });

  it('should ...', inject([DataTransmitService], (service: DataTransmitService) => {
    expect(service).toBeTruthy();
  }));
});
