export interface ProductsSC {
  /** 品番 */
  productNo: string;
  /** 品名 */
  productName: string;
  /** 納期 */
  deliveryAt: {
    /** from */
    from: Date;
    /** to */
    to: Date;
  };
}
