import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModule } from 'src/app/pages/list/list.module';
import { NewDrinkModule } from 'src/app/pages/new-drink/new-drink.module';
import { MyDrinksModule } from 'src/app/pages/my-drinks/my-drinks.module';
import { EditDrinkModule } from 'src/app/pages/edit-drink/edit-drink.module';
import { DetailsModule } from './pages/details/details.module';
import { drinksResolver } from './core/resolvers/drinks.resolver';



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
  loadChildren:()=> import('src/app/pages/new-drink/new-drink.module').then(m=>NewDrinkModule)
},

{
  path: "my-drinks",
  pathMatch: 'prefix',
  loadChildren:() => import('src/app/pages/my-drinks/my-drinks.module').then(m=>MyDrinksModule)
},
{
  path:'edit-drink/:id',
  pathMatch: 'prefix',
  loadChildren:()=> import('src/app/pages/edit-drink/edit-drink.module').then(m=>EditDrinkModule)
},
{
  path: "details/:strDrink",
  pathMatch: 'prefix',
  loadChildren:()=> import ('src/app/pages/details/details.component').then(m=>DetailsModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
