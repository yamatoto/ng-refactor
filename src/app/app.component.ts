import { Component, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class I18n {
  language = 'jpn';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) {
    translate.setDefaultLang('ja');
    translate.use('ja');
  }

  ngOnInit() {

  }
}
