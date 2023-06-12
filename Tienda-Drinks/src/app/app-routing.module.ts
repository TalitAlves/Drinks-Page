import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModule } from 'src/app/pages/list/list.module';
import { NewDrinkModule } from 'src/app/pages/new-drink/new-drink.module';


const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  redirectTo: 'home',
},
{
  path:'home',
  pathMatch: 'prefix',
  loadChildren:()=> import ('src/app/pages/home/home.module').then(m=>m.HomeModule)
},

{
  path:'list',
  pathMatch: 'prefix',
  loadChildren:()=> import('src/app/pages/list/list.module').then(m=>ListModule)
},
{
  path: "new-drink",
  pathMatch:'prefix',
  loadChildren:()=> import('src/app/pages/new-drink/new-drink.module').then(m=>NewDrinkModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
