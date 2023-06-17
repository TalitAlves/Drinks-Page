import { Pipe, PipeTransform } from '@angular/core';
import { Criteria } from 'src/app/core/models/drinks.model';
import { Drink } from 'src/app/core/models/drinks.model';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(array: Drink[], criteria?: Criteria): Drink[] {
    if (!criteria) {
      return array;
    }
    const sortArray = array.sort((a: Drink, b: Drink) => {
      const drinkA = a.strDrink.toLowerCase();
      const drinkB = b.strDrink.toLowerCase();
      if (criteria === 'Asc') {
        if (drinkA < drinkB) {
          return -1;
        } else if (drinkA > drinkB) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (drinkB < drinkA) {
          return -1
        } else if (drinkB < drinkA) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return sortArray;
  }
}
