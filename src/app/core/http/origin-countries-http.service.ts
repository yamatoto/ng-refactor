import { Injectable } from '@angular/core';
import { OriginCountry } from '@shared/models/origin-country.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const URL = '/originCountries';

@Injectable({
  providedIn: 'root'
})
export class OriginCountriesHttpService {

  constructor(
    private apiService: ApiService
  ) { }

  findAll(): Observable<OriginCountry[]> {
    return this.apiService.get(URL);
  }
}
