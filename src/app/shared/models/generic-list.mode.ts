/**
 * リストのモデル
 */
export interface GenericList<T>{
  /** 結果のリスト */
  resList: T[];
  /** 結果の次のページにアクセスする為のトークン */
  newxPageToken: string;
}
