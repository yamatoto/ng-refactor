import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    login(form: { email: string; password: string }): Observable<User> {
        const email = form.email;
        const password = form.password;
        return this.http.post<User>('/api/login', {email, password});
    }
}
