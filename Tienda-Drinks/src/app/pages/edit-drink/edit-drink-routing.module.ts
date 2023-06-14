import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDrinkComponent } from './edit-drink.component';

const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  component: EditDrinkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDrinkRoutingModule { }
