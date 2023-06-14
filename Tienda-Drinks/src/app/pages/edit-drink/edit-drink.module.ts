import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDrinkRoutingModule } from './edit-drink-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditDrinkComponent } from './edit-drink.component';


@NgModule({
  declarations: [
    EditDrinkComponent
  ],
  imports: [
    CommonModule,
    EditDrinkRoutingModule,
    SharedModule,
  ]
})
export class EditDrinkModule { }
