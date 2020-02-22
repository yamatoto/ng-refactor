import { Injectable } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductsSC } from '@shared/models/search-conditions/products-sc.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const URL = '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  constructor(
    private apiService: ApiService
  ) { }

  findById(id: number): Observable<Product> {
    return this.apiService.get(`${URL}/${id}`);
  }

  search(conditions: ProductsSC): Observable<Product[]> {
    return this.apiService.post(URL, conditions);
  }
}
