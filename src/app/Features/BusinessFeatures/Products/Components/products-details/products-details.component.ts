import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { PageTitleService } from 'src/app/Features/SharedFeatures/Services/page-title.service';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.sass']
})
export class ProductsDetailsComponent implements OnInit {
  productId: any;
  product: Product | undefined
  displayLoader: boolean | undefined 
  constructor(
    private route: ActivatedRoute,
    private pageTitle: PageTitleService,
    private _productsService: ProductsService,
    private toast: HotToastService,
  ) { }

  ngOnInit(): void {
    this.setPageTitle();
    this.extractUrlParams();
    this.getProducts();
  }
  extractUrlParams() {
    this.productId = this.route.snapshot.params['id'];
   
  }
  setPageTitle(): void {
    this.pageTitle.setTitle('Product Details');
  }

  getProducts(): void {
    this.displayLoader = true;
    this._productsService.getProductById(this.productId).subscribe(res => {
      this.product = res
      this.displayLoader = false;
    },
      (error) => {
        this.displayLoader = false;
        this.toast.error(`${error.message}`, {
          position: 'top-left',
        })
      },
      () => {

      }
    )
  }

}
