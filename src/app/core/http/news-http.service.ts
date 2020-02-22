import { Injectable } from '@angular/core';
import { News } from '@shared/models/news.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const URL = '/news';

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {
  constructor(
    private apiService: ApiService
  ) { }

  findAll(): Observable<News[]> {
    return this.apiService.get(URL);
  }

  findById(id: number): Observable<News> {
    return this.apiService.get(`${URL}/${id}`);
  }
}
