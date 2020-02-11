import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectService } from '@core/services/utils/object.service';
import { environment } from '@env/environment';
import { ContentTypeConsts } from '@shared/consts/content-type.const';
import { CustomEncoder } from '@shared/lib/custom-encoder.lib';
import { GenericList } from '@shared/models/generic-list.mode';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SessionHttpService } from './session-http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private sessionhttpService: SessionHttpService,
    private objService: ObjectService
  ) { }

  /**
     * APIサーバからデータを1件取得する.(get)
     * @param url APIのURL
     * @param params パラメータ
     * @returns レスポンス
     */
  get<REQ_MODEL, RES_MODEL>(url: string, params: REQ_MODEL = null): Observable<RES_MODEL> {
    this.startLog(url, 'get', params);
    const endLogger = this.endLog(url, 'get');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const API_PARAMS = this.toHttpParams(params);
    const options = { params: API_PARAMS, withCredentials: true };

    return this.http
      .get<RES_MODEL>(API_URL, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバからデータを1件取得する.(post)
     * @param url APIのURL
     * @param formValue フォーム入力値
     * @returns レスポンス
     */
  post<REQ_MODEL, RES_MODEL>(url: string, model: REQ_MODEL = null): Observable<RES_MODEL> {
    this.startLog(url, 'post');
    const endLogger = this.endLog(url, 'post');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken(),
      'Content-Type': ContentTypeConsts.JSON,
    });
    const options = {
      headers: HEADERS, withCredentials: true
    };

    return this.http
      .post<RES_MODEL>(API_URL, model, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバからデータリストを取得する.(get)
     * @param url APIのURL
     * @param params パラメータ
     * @returns レスポンス
     */
  listByGet<REQ_MODEL, RES_MODEL>(url: string, params: REQ_MODEL = null): Observable<GenericList<RES_MODEL>> {
    this.startLog(url, 'listByGet', params);
    const endLogger = this.endLog(url, 'listByGet');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const API_PARAMS = this.toHttpParams(params);
    const options = { params: API_PARAMS, withCredentials: true };

    return this.http
      .get<GenericList<RES_MODEL>>(API_URL, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバからデータリストを取得する.(post)
     * @param url APIのURL
     * @param model リクエストするデータ
     * @returns レスポンス
     */
  listByPost<REQ_MODEL, RES_MODEL>(url: string, model: REQ_MODEL = null): Observable<GenericList<RES_MODEL>> {
    this.startLog(url, 'listByPost');
    const endLogger = this.endLog(url, 'listByPost');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken(),
      'Content-Type': ContentTypeConsts.JSON,
    });
    const options = { headers: HEADERS, withCredentials: true };

    return this.http
      .post<GenericList<RES_MODEL>>(API_URL, model, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバにデータを1件登録する.(post)
     * @param url APIのURL
     * @param model 登録するデータ
     * @returns レスポンス
     */
  create<REQ_MODEL, RES_MODEL>(url: string, model: REQ_MODEL): Observable<RES_MODEL> {
    this.startLog(url, 'create');
    const endLogger = this.endLog(url, 'create');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken(),
      'Content-Type': ContentTypeConsts.JSON,
    });
    const options = { headers: HEADERS, withCredentials: true };

    return this.http
      .post<RES_MODEL>(API_URL, model, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバのデータを1件更新する.(put)
     * @param url APIのURL
     * @param model リクエストするデータ
     * @returns レスポンス
     */
  update<REQ_MODEL, RES_MODEL>(url: string, model: REQ_MODEL = null): Observable<GenericList<RES_MODEL>> {
    this.startLog(url, 'update');
    const endLogger = this.endLog(url, 'update');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken(),
      'Content-Type': ContentTypeConsts.JSON,
    });
    const options = { headers: HEADERS, withCredentials: true };

    return this.http
      .put<GenericList<RES_MODEL>>(API_URL, model, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバからデータを1件削除する.(delete)
     * @param url APIのURL
     * @returns レスポンス
     */
  delete<RES_MODEL>(url: string): Observable<RES_MODEL> {
    this.startLog(url, 'delete');
    const endLogger = this.endLog(url, 'delete');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken(),
      'Content-Type': ContentTypeConsts.JSON,
    });
    const options = { headers: HEADERS, withCredentials: true };

    return this.http
      .delete<RES_MODEL>(API_URL, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバからファイルを取得する.(get)
     * @param url APIのURL
     * @param params パラメータ
     * @returns レスポンス
     */
  downloadFile<REQ_MODEL>(url: string, params: REQ_MODEL = null): Observable<any> {
    this.startLog(url, 'downloadFile', params);
    const endLogger = this.endLog(url, 'downloadFile');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const API_PARAMS = this.toHttpParams(params);

    return this.http
      .get(API_URL, {
        params: API_PARAMS, withCredentials: true, responseType: 'blob', observe: 'response'
      })
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * APIサーバにファイルを登録する.(post)
     * @param url APIのURL
     * @param formValue フォーム値
     * @returns レスポンス
     */
  uploadFile<REQ_MODEL, RES_MODEL>(url: string, formValue: REQ_MODEL): Observable<RES_MODEL> {
    this.startLog(url, 'uploadFile');
    const endLogger = this.endLog(url, 'uploadFile');

    const API_URL = `${environment.apiBaseUrl}${url}`;
    const HEADERS = new HttpHeaders({
      'x-xsrf-token': this.sessionhttpService.getToken()
    });
    const options = { headers: HEADERS, withCredentials: true };

    return this.http
      .post<RES_MODEL>(API_URL, formValue, options)
      .pipe(
        tap(endLogger, console.error),
        map(res => res['payload'])
      );
  }

  /**
     * @param オブジェクト
     * @returns HTTPパラメータ型に変換したオブジェクト
     */
  private toHttpParams(params: any): HttpParams {
    if (this.objService.isNullOrUndefined(params)) {
      return;
    }

    return Object.getOwnPropertyNames(params)
      .filter(key => this.objService.isNotNullAndUndefined(params[key]))
      .reduce(
        (p, key) => p.set(key, params[key]),
        new HttpParams({ encoder: new CustomEncoder() })
      );
  }

  /**
     * http通信開始ログ
     * @param url APIのURL
     * @param fn 関数名
     * @param params パラメータ
     */
  private startLog(url: string, fn: string, params: any = null) {
    console.log(
      JSON.stringify({
        [fn]: {
          start: { url: url },
          params: params
        }
      })
    );
  }

  /**
     * http通信終了ログ
     * @param url APIのURL
     * @param fn 関数名
     * @param res HTTPレスポンス
     */
  private endLog = (url: string, fn: string) => ( res: any = null ) =>
    console.log(
      JSON.stringify({
        [fn]: {
          end: { url: url },
          res: res
        }
      })
    );
}
