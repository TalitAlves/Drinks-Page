import { NewDrinkComponent } from './../../pages/new-drink/new-drink.component';
import { CanDeactivateFn } from '@angular/router';

export const exitFormGuard: CanDeactivateFn<NewDrinkComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.isDirty){
  return window.confirm("Exit without saving?");
  } else {
    return true
  }
};
