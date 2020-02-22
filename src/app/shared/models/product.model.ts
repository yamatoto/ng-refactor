import { Table } from './table.model';

export class Product extends Table {
  /** 品番 */
  productNo: string;
  /** 品名 */
  productName: string;
  /** 納期from */
  deliveryAtFrom: Date;
  /** 納期to */
  deliveryAtTo: Date;
}
