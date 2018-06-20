import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleUrlParamParserService {

  constructor() { }

  getQueryParams(): any {
    const keyValuePairs = {};
    const queryParams = window.location.hash.replace('#', '').split('&');
    queryParams.forEach(param => {
      const key = param.split('=')[0];
      const value = param.split('=')[1];
      keyValuePairs[key] = value;
    });
    return keyValuePairs;
  }
}
