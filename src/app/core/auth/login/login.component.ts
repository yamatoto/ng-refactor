import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthHttpService } from '../../http/auth-http.service';
import { login } from '../auth.actions';
import { AppState } from './../../../reducers/index';
import { LoginFormService } from './../../services/login-form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginFormService],
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formService: LoginFormService,
        private authHttpService: AuthHttpService,
        private router: Router,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        this.form = this.formService.form;
    }

    /**
     * ログイン処理.
     */
    login(): void {
        this.authHttpService.login(this.form.value)
            .pipe(
                tap(user => {
                    this.store.dispatch(login({ user }));
                    this.router.navigateByUrl('/home');
                })
            ).subscribe(
                noop,
                () => alert('Login Failed')
            );
    }
}
