import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    ListComponent,
    CardComponent
  ]
})
export class ListModule { }
