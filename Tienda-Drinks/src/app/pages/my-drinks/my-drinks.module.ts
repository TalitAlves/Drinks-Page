import { MyDrinksRoutingModule } from './my-drinks-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDrinksComponent } from './my-drinks.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    MyDrinksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyDrinksRoutingModule,
  
  ] ,
  exports:[
    MyDrinksComponent
  ]
})
export class MyDrinksModule { }
