import { Component, OnInit } from '@angular/core';
import { NewsHttpService } from '@core/http/news-http.service';
import { News } from '@shared/models/news.model';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-news-list-smart',
  template: `
    <mat-card>
      <ng-container *ngIf="news$ | async as news;">
        <app-news-list [news]="news"></app-news-list>
      </ng-container>
      <app-contact-info></app-contact-info>
    </mat-card>
  `
})
export class NewsListSmartComponent implements OnInit {
  loading$: Observable<boolean>;

  news$: Observable<News[]>;

  constructor(
    private newsHttpService: NewsHttpService
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload(): void {
    this.news$ = this.newsHttpService.findAll()
      .pipe(
        map(news => news),
        shareReplay()
      );
  }
}
