import { Injectable } from '@angular/core';

/**
 * 真偽値サービス.
 */
@Injectable({
    providedIn: 'root'
})
export class BooleanService {

    constructor() { }

    /**
     * string型のboolean値をboolean型に変換する.
     * 'true'でも'false'でもない場合はnullを返す.
     * @param str string型のboolean値
     * @returns boolean型に変換した値
     */
    parseStrToBoolean(str: string): boolean {
        switch (str) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                return null;
        }
    }
}
