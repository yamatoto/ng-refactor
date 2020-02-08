import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { ApiService } from './api.service';

const URL = '/login';

@Injectable()
export class AuthHttpService {

    constructor(
        private apiServise: ApiService,
        private http: HttpClient
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
