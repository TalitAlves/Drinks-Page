import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { drinksResolver } from './drinks.resolver';

describe('drinksResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => drinksResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
