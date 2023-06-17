import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsModule } from '../details/details.module';
import { DetailsComponent } from '../details/details.component';



@NgModule({
  declarations: [
    ListComponent,
    
    
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DetailsModule
  ],
  exports:[
    ListComponent,

  ]
})
export class ListModule { }
