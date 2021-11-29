import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from '../Components/add-product/add-product.component';
import { ProductsDetailsComponent } from '../Components/products-details/products-details.component';
import { ProductsListComponent } from '../Components/products-list/products-list.component';


const routes: Routes = [
   

  {
    path: 'list',
    component: ProductsListComponent,

  },
  {
    path: 'add-product',
    component: AddProductComponent,

  },
  {
    path: 'view-product/:id', 
    component: ProductsDetailsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
