import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDrinkComponent } from './new-drink.component';
import { exitFormGuard } from 'src/app/core/guards/exit-form.guard';


const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component: NewDrinkComponent,
  canDeactivate: [exitFormGuard]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDrinkRoutingModule { }
