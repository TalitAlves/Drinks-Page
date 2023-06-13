import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormComponent,
    
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    FormComponent,
      
  ]
})
export class SharedModule { }
