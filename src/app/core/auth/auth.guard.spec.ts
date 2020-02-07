import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { DummyComponent } from '../mocks/dummy.component';
import { MockActivatedRouteSnapshot } from './../mocks/dummy-activate-route-snapshot';
import { AuthGuard } from './auth.guard';
import { AuthState } from './reducers/index';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let store: MockStore<{loggedIn: boolean}>;
    const initialState = {loggedIn: false};
    let mockSnapshot: any;
    let route: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    {path: 'route1', component: DummyComponent},
                    {path: 'route2', component: DummyComponent},
                ])
            ],
            providers: [
                AuthGuard, {
                    provide: ActivatedRouteSnapshot,
                    useClass: MockActivatedRouteSnapshot
                },
                provideMockStore({initialState}),
                // other providers
            ]
        });
        mockSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
        store = TestBed.get<Store<AuthState>>(Store);
        guard = TestBed.get<AuthGuard>(AuthGuard);
        route = TestBed.get(ActivatedRouteSnapshot);
    });

    it('ユーザーがログインしていなければfalseを返す', () => {
        const expected = cold('(a|)', {a: false});
        expect(guard.canActivate(route, mockSnapshot)).toBeObservable(expected);
    });

    it('ユーザーがログインしていればtrueを返す', () => {
        store.setState({ loggedIn: true });

        const expected = cold('(a|)', { a: true });

        expect(guard.canActivate(route, mockSnapshot)).toBeObservable(expected);
    });
});
