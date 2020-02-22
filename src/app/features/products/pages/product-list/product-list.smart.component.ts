import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '@core/http/products-http.service';
import { Product } from '@shared/models/product.model';
import { ProductsSC } from '@shared/models/search-conditions/products-sc.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-smart',
  template: `
    <app-search-products-form (search)="searchProducts($event)"></app-search-products-form>
    <app-product-list [products]="products$|async"></app-product-list>
  `
})
export class ProductListSmartComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(private productHttpService: ProductsHttpService) { }

  ngOnInit() { }

  searchProducts(searchFormValue: ProductsSC): void {
    this.products$ = this.productHttpService.search(searchFormValue);
  }
}
