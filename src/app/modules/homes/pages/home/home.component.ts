import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading$: Observable<boolean>
    news$: Observable<any[]>; // TODO:interface

    constructor(
        // private newsHttpService: NewsHttpService
    ) { }

    ngOnInit() {
        this.reload();
    }

    /**
     * リロード処理.
     */
    reload(): void {
        // const news$ = this.newsHttpService.findAllNews()
        //     .pipe(
        //         map(news => news),
        //         shareReplay()
        //     );
    }

}
