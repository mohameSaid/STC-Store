import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { PageTitleService } from 'src/app/Features/SharedFeatures/Services/page-title.service';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  displayLoader: boolean = false;
  constructor(private route: ActivatedRoute,
    private pageTitle: PageTitleService,
    private _productsService: ProductsService,
    private toast: HotToastService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  validateModel(): boolean {
    let result: boolean = false;
    if (this.productForm.valid)
      result = true;
    else {

      this.productForm.markAllAsTouched();
    }

    return result;
  }
  submit(): void {
    let isValid = this.validateModel();
    if (!isValid) {
      return;
    }

    console.log(this.productForm.value);
   
    this._productsService.AddNewProduct(this.productForm.value).subscribe(res => {
      this.toast.success(`Product Added successfully`, {
        position: 'top-left',
      })
      this.router.navigate(['/products/list']);

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

  productForm = this.fb.group({

    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)],],
    category: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)],],
    price: ['', [Validators.required],],
    description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)],],
    image: ['', [Validators.required]],
  });


}
