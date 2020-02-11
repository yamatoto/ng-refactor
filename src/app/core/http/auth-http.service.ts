import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { ApiService } from './api.service';

const URL = '/login';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(
    private apiServise: ApiService
  ) { }

  /**
     * ログイン.
     * @param formValue ログインフォーム値
     * @returns レスポンス
     */
  login(formValue: { email: string; password: string }): Observable<User> {
    return this.apiServise
      .post<{ email: string; password: string }, User>(URL, formValue)
      .pipe(
        shareReplay()
      );
  }
}
