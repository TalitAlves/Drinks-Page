import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    NavbarComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
