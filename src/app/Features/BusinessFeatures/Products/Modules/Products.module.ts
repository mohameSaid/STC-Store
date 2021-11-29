import { NgModule } from '@angular/core';
import { AddProductComponent } from '../Components/add-product/add-product.component';
import { ProductsDetailsComponent } from '../Components/products-details/products-details.component';
import { ProductsListComponent } from '../Components/products-list/products-list.component';
import { ProductsRoutingModule } from '../Routers/products-routing.module';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { OverlayLoaderComponent } from 'src/app/Features/SharedFeatures/components/overlay-loader/overlay-loader.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    AddProductComponent,
    OverlayLoaderComponent
  ],
  imports: [
    ProductsRoutingModule,
    ReactiveFormsModule,
   
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  
  ],
  providers: []
})
export class ProductsModule { }
