import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-list-smart',
  template: `
    <app-search-list-form (search)="searchProducts($event)"></app-search-list-form>
    <app-product-list></app-product-list>
  `
})
export class ProductListSmartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchProducts(searchForm: NgForm): void {
    console.log('onSearch!!!! searchForm.value:::', searchForm.value);
  }
}
