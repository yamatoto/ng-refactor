import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../../../shared/models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input()
  news: News[];

  displayedColumns = ['categoryId', 'title', 'content', 'openedAt'];

  dataSource;

  constructor() { }

  ngOnInit() {
    console.log('this.news:::', this.news);
    this.dataSource = this.news;
  }
}
