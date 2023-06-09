import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { FunctionalityComponent } from './functionality/functionality.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutPageComponent,
    FunctionalityComponent,
   
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ],
  exports:[
     HomeComponent,
  ]
})
export class HomeModule { }
