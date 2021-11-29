import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HotToastService } from '@ngneat/hot-toast';
import { PageTitleService } from 'src/app/Features/SharedFeatures/Services/page-title.service';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  displayLoader: boolean = true;
  displayedColumns: string[] = ['title', 'price', 'category', 'Details'];
  dataSource!: MatTableDataSource<Product>;
  @ViewChild(MatSort) sort: MatSort = new MatSort;



  constructor(private _productsService: ProductsService, private toast: HotToastService, private pageTitle: PageTitleService,) { }

  ngOnInit(): void {
    this.getProducts();

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  setPageTitle(): void {
    this.pageTitle.setTitle('Products');
  }
  getProducts(): void {

    
    this._productsService.getAllProducts().subscribe(res => {
     
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
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
