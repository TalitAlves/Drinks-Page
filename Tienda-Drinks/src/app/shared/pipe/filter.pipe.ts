import { Pipe, PipeTransform } from '@angular/core';
import { Drink } from 'src/app/core/models/drinks.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Drink[], drinkName:string): Drink[] {
    return value.filter((drink) => drink.strDrink.includes(drinkName))
  }

}
