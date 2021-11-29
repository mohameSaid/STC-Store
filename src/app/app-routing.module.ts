import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'products' },

  {
    path: 'products',
    loadChildren: () =>
      import(
        'src/app/Features/BusinessFeatures/Products/Modules/Products.module'
      ).then((m) => m.ProductsModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
