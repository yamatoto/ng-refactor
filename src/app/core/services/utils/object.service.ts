import { Injectable } from '@angular/core';

/**
 * オブジェクト.
 */
@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  constructor() {}

  /**
   * @param チェック対象のオブジェクト
   * @returns true: objがnull
   */
  isNull<T>(obj: T | null | undefined): boolean {
    return obj === null;
  }

  /**
   * @param チェック対象のオブジェクト
   * @returns true: objがnullでない
   */
  isNotNull<T>(obj: T | null | undefined): boolean {
    return obj !== null;
  }

  /**
   * @param チェック対象のオブジェクト
   * @returns true: objがundefined
   */
  isUndefined<T>(obj: T | null | undefined): boolean {
    return obj === undefined;
  }

  /**
   * @param チェック対象のオブジェクト
   * @returns true: objがundefinedでない
   */
  isNotUndefined<T>(obj: T | null | undefined): boolean {
    return obj !== undefined;
  }
}
