import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
const routes: Routes = [
  {
     path: '', redirectTo: 'products-list', pathMatch: 'full'
  },
  {
    path: 'products-list',
    component: ProductList
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
