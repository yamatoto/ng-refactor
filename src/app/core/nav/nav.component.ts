import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../reducers';
import { login, logout } from '../auth/auth.actions';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    /** ローディング表示フラグ  */
    loading = true;

    /** ログイン状態 */
    isLoggedIn$: Observable<boolean>;
    /** ログアウト状態 */
    isLoggedOut$: Observable<boolean>;

    constructor(
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.setLoading();

        const userProfile = localStorage.getItem('user');
        if (userProfile) {
            this.store.dispatch(login({'user': JSON.parse(userProfile)}));
        }

        this.isLoggedIn$ = this.store.pipe(
            select(isLoggedIn)
        );

        this.isLoggedOut$ = this.store.pipe(
            select(isLoggedOut)
        );
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
