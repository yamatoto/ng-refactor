import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttpService } from '@core/http/auth-http.service';
import { LoginFormService } from '@core/services/login-form.service';
import { login } from '@core/store/actions/auth.actions';
import { AppState } from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginFormService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formService: LoginFormService,
    private authHttpService: AuthHttpService,
    private router: Router,
    private route: ActivatedRoute,
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
          this.router.navigate([ this.route.snapshot.queryParams.redirect || '/home'], { replaceUrl: true });
        })
      ).subscribe(
        noop,
        () => alert('Login Failed')
      );
  }
}
