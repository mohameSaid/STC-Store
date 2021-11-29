import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpServiceService } from 'src/app/Features/SharedFeatures/Services/base-http-service.service';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpServiceService {
  constructor(
    private http: HttpClient,

  ) {
    super(http);
  }

  getAllProducts(): Observable<Product[]> {
    let url: string = `${this.baseUrl}products`;
    return this.getData<Product[]>(url);
  }

  getProductById(id:any): Observable<Product> {
    let url: string = `${this.baseUrl}products/${id}`;
    return this.getData<Product>(url);
  }
  AddNewProduct(model:any): Observable<Product> {
    let url: string = `${this.baseUrl}products`;
    return this.postData<Product>(url,model);
  }

}
