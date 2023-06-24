import { MyDrinksRoutingModule } from './my-drinks-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDrinksComponent } from './my-drinks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyDrinksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyDrinksRoutingModule,
    FormsModule
    
  
  ] ,

})
export class MyDrinksModule { }
