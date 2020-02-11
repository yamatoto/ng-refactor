import { Injectable } from '@angular/core';
import { AuthConsts } from '../../shared/consts/auth.const';
import { Auth } from '../../shared/enums/auth.enum';
import { Session } from '../../shared/models/session.model';

/**
 * 権限サービス
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
     * @param session セッション
     * @returns 社内権限の有無
     */
  isInternal(session: Session): boolean {
    const existsAuth = this.existsAuth(session);
    return AuthConsts.INTERNAL_AUTHES.every(existsAuth);
  }

  /**
     * @param session セッション
     * @returns マスタ編集権限の有無
     */
  isMasterEditable(session: Session): boolean  {
    const existsAuth = this.existsAuth(session);
    return AuthConsts.MASTA_EDITABLE_AUTHES.every(existsAuth);
  }

  /**
     * @param session セッション
     * @param auth 権限
     * @returns true:セッションに該当する権限あり
     */
  private existsAuth = (session: Session) => (auth: Auth) => session.authes.some(sAuth => sAuth === auth);
}
