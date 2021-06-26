import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AddproductComponent} from './components/addproduct/addproduct.component';
import {UpdateproductComponent} from './components/updateproduct/updateproduct.component';


const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"",component:HomeComponent},
  {path:"new",component:AddproductComponent},
  {path:"update/:id",component:UpdateproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
