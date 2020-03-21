import { Table } from './table.model';

export class OriginCountry extends Table {
  /** 原産国コード */
  productNo: string;
  /** 原産国名(略) */
  abbreviatedName: string;
  /** 原産国名 */
  name: string;
  /** 優良誤認国対象区分 */
  quarityTarget: boolean;
}
