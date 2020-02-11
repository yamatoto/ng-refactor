import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionConsts } from '@shared/consts/session.const';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('success');
        }
      }, err => this.navigateAtError(err, req))
    );
  }

  /**
   * エラー時の画面遷移.
   */
  private navigateAtError(error: HttpErrorResponse, req: HttpRequest<any>) {
    console.log('HttpApiInterceptor error:', error);
    switch (error.status) {
      case 401:
        if (this.isRedirectLogin(req)) {
          this.router.navigate(['login'], { queryParams: { status: 401, redir: this.router.url } });
        }
        break;
      case 480: // メンテ中
        this.router.navigateByUrl('/maintenance');
        break;
      default:
        break;
    }
  }

  /**
   * ログイン画面への遷移判定.
   * ログイン画面が表示中の場合は遷移なし.
   * セッション関連のAPI呼び出し時は遷移なし(ログイン画面やAuthGuardで処理する).
   * @param req リクエスト
   * @return true:ログイン画面に遷移する
   */
  private isRedirectLogin(req: HttpRequest<any>): boolean {
    if (this.router.url.startsWith('/login')
        || req.url.startsWith(SessionConsts.BASE_URL)) {
      return false;
    }
    return true;
  }
}
