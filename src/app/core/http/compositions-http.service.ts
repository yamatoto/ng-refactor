import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const URL = '/conpositions';

@Injectable({
  providedIn: 'root'
})
export class CompositionsHttpService {

  constructor(
    private apiService: ApiService
  ) { }

  findAll(): Observable<any[]> {
    return this.apiService.get(URL);
  }
}
