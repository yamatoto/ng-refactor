import { Injectable } from '@angular/core';
import { Auth } from '../../shared/enums/auth.enum';
import { Session } from '../../shared/models/session.model';

/** ホスト権限. */
const HOST_AUTHES = [Auth.Host];

/** マスタ編集権限. */
const MASTA_EDITABLE_AUTHES = [Auth.System, Auth.Admin, Auth.Host];

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
     * @returns ホスト権限の有無
     */
    isHost(session: Session) {
        const existsAuth = this.existsAuth(session);
        return HOST_AUTHES.every(existsAuth);
    }

    /**
     * @param session セッション
     * @returns マスタ編集権限の有無
     */
    isMasterEditable(session: Session) {
        const existsAuth = this.existsAuth(session);
        return MASTA_EDITABLE_AUTHES.every(existsAuth);
    }

    /**
     * @param session セッション
     * @param auth 権限
     * @returns true:セッションに該当する権限あり
     */
    private existsAuth = session => auth => session.authes.some(sAuth => sAuth === auth);
}
