import { Component, Input, OnInit } from '@angular/core';
import { NEWS_CATEGORY_DICTIONARY } from '@shared/dictionaries/news-catogory.dictionary';
import { News } from '@shared/models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input()
  private news: News[];

  readonly NEWS_CATEGORY = NEWS_CATEGORY_DICTIONARY;

  displayedColumns = ['categoryId', 'openedAt', 'title'];

  dataSource: News[];

  constructor() { }

  ngOnInit() {
    this.dataSource = this.news;
  }
}
