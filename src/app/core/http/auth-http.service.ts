import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { ApiService } from './api.service';

const URL = '/login';

@Injectable()
export class AuthHttpService {

    constructor(
        private apiServise: ApiService
    ) { }

    /**
     * ログイン.
     * @param formValue
     * @returns レスポンス
     */
    login(formValue: { email: string; password: string }): Observable<User> {
        return this.apiServise.post(URL, formValue);
    }
}
