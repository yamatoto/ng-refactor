import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsHttpService } from '@core/http/news-http.service';
import { News } from '@shared/models/news.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-smart',
  template: `
    <ng-container *ngIf="news$ | async as news;">
      <app-news [news]="news"></app-news>
    </ng-container>
  `
})
export class NewsSmartComponent implements OnInit {
  news$: Observable<News>;

  constructor(
    private newsHttpService: NewsHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.news$ = this.newsHttpService.findNewsById(Number(id));
    });
  }
}
