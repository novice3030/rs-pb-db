import { TestBed, inject } from '@angular/core/testing';

import { SimpleUrlParamParserService } from './simple-url-param-parser.service';

describe('SimpleUrlParamParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleUrlParamParserService]
    });
  });

  it('should be created', inject([SimpleUrlParamParserService], (service: SimpleUrlParamParserService) => {
    expect(service).toBeTruthy();
  }));
});
