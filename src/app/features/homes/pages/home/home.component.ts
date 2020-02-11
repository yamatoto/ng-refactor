import { Component, OnInit } from '@angular/core';
import { NewsHttpService } from '@core/http/news-http.service';
import { News } from '@shared/models/news.model';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading$: Observable<boolean>;

  news$: Observable<News[]>;

  constructor(
    private newsHttpService: NewsHttpService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload(): void {
    this.news$ = this.newsHttpService.findAllNews()
      .pipe(
        map(news => news),
        shareReplay()
      );
  }
}
