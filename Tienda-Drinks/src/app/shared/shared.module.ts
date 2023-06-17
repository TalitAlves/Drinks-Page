import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { OrderPipe } from './pipe/order.pipe';



@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
    OrderPipe,
    
        
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    FormComponent,
    CardComponent,
    OrderPipe
   
      
  ]
})
export class SharedModule { }
