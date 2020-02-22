import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsSC } from '@shared/models/search-conditions/products-sc.model';

@Component({
  selector: 'app-search-products-form',
  templateUrl: './search-products-form.component.html',
  styleUrls: ['./search-products-form.component.scss']
})
export class SearchProductsFormComponent implements OnInit {
  @Output()
  private search = new EventEmitter<ProductsSC>();

  constructor() { }

  ngOnInit() { }

  onSearch(searchForm: NgForm): void {
    this.search.emit({...searchForm.value});
  }
}
