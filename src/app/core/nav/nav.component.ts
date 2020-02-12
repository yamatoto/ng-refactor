import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { login, logout } from '@core/store/actions/auth.actions';
import { AppState } from '@core/store/reducers';
import { isLoggedIn, isLoggedOut } from '@core/store/selectors/auth.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
      const user = JSON.parse(userProfile);
      this.store.dispatch(login({user}));
    }

    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }

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

  logout(): void {
    this.store.dispatch(logout());
  }
}
