import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from './core/auth/auth.actions';
import { AppState } from './reducers/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loading = true;

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.setLoading();
    }

    /**
     * ローディング表示.
     */
    private setLoading(): void {
        this.router.events.subscribe(event => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    /**
     * ログアウト処理.
     */
    logout(): void {
        this.store.dispatch(logout());
    }
}
