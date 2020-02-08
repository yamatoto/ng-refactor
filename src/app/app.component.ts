import { Component, Injectable, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const I18N_VALUES = {
    'jpn': {
        weekdays: ['月', '火', '水', '木', '金', '土', '日'],
        months: ['１', '２', '３', '４', '５', '６', '７', '８', '９', '１０', '１１', '１２']
    }
};

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
