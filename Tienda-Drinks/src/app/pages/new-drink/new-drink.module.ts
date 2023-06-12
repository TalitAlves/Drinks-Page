import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDrinkRoutingModule } from './new-drink-routing.module';
import { NewDrinkComponent } from './new-drink.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewDrinkComponent
  ],
  imports: [
    CommonModule,
    NewDrinkRoutingModule,
    SharedModule,
  ]
})
export class NewDrinkModule { }
