import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Session } from '../../shared/models/session.model';
import { ObjectService } from '../services/utils/object.service';

const BASE_URL = `${environment.apiBaseUrl}/sessions`;
const SESSION_ME_URL = `${BASE_URL}/me`;
const SESSION_ME_DELETE_URL = `${BASE_URL}/me:delete`;
const TOKEN_NAME = 'XSRF-TOKEN';
const CONTENT_TYPE_FORM_UNLECODED = 'application/x-www-form-unlecoded';
const SESSION_GENERATION_TIME_NAME = 'SGT';

@Injectable({
    providedIn: 'root'
})
export class SessionHttpService {
    private sessionSubject = new BehaviorSubject<Session>(null);
    private sessionGenerationTime: string = null;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private objService: ObjectService
    ) { }

    /**
     * @returns クッキーのトークン
     */
    getToken(): string {
        return this.cookieService.get(TOKEN_NAME);
    }

    /**
     * @returns APIセッション
     */
    getApiSession(): Observable<Session> {
        if (this.objService.isNotNullAndUndefined(this.getSavedSession())
            && this.cookieService.get(SESSION_GENERATION_TIME_NAME) === this.sessionGenerationTime) {
            return this.sessionSubject.asObservable();
        }

        return this.http
            .get<Session>(SESSION_ME_URL, { withCredentials: true })
            .pipe(tap(this.saveSession));
    }

    /**
     * @returns 保存しているセッション
     */
    getSavedSession(): Session {
        return this.sessionSubject.getValue();
    }

    /**
     * APIセッションを作成する.
     * @param formValue ログインフォームの入力値
     * @returns レスポンス
     */
    createApiSession(formValue: { companyCode: string; accoutName: string; password: string }): Observable<Session> {
        this.deleteSavedSession();

        const accountName = encodeURIComponent(`${formValue.companyCode}¥n${formValue.accoutName}`);
        const pass = encodeURIComponent(formValue.password);
        const body = `accountName=${accountName}&password=${pass}`;
        const options = {
            headers: new HttpHeaders({'Content-Type': CONTENT_TYPE_FORM_UNLECODED}),
            withCredentials: true
        };

        return this.http
            .post<Session>(BASE_URL, body, options)
            .pipe(tap(this.saveSession));
    }

    /**
     * APIセッションを削除する.
     */
    deleteApiSession(): Observable<void> {
        const HEADERS = new HttpHeaders({ 'x-xsrf-token': this.getToken() });
        const options = {
            headers: HEADERS,
            withCredentials: true
        };

        return this.http
            .post<void>(SESSION_ME_DELETE_URL, options)
            .pipe(tap(this.deleteSavedSession));
    }

    /**
     * セッションを保存する.
     * @param session セッション
     */
    private saveSession(session: Session): void {
        this.sessionSubject.next(session);
        this.sessionGenerationTime = new Date().valueOf().toString();
        this.cookieService.set(SESSION_GENERATION_TIME_NAME, this.sessionGenerationTime);
    }

    /**
     * 保存済のセッションを削除する.
     */
    private deleteSavedSession(): void {
        this.sessionSubject.next(null);
        this.cookieService.delete(SESSION_GENERATION_TIME_NAME);
        window.sessionStorage.clear();
    }
}
