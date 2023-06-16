import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    FormComponent,
    CardComponent,
        
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
      
  ]
})
export class SharedModule { }
