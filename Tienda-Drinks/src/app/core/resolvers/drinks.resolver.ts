
import { Inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ComunicatorService } from '../comunicator.service';
import { Observable } from 'rxjs';
import { Drink } from '../models/drinks.model';

export const drinksResolver: ResolveFn<Observable<Drink[]>> = (route, state) => {
 
  const comunicatorService = Inject(ComunicatorService);
  return comunicatorService.getDrink();
};
