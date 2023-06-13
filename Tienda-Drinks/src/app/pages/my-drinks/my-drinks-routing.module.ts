import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDrinksComponent } from './my-drinks.component';

const routes: Routes = [{
  path:'',
  pathMatch: "full",
  component: MyDrinksComponent,

}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDrinksRoutingModule { }
