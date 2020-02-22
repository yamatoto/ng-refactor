export interface ProductsSC {
  /** 品番 */
  productNo: string;
  /** 品名 */
  productName: string;
  /** 仮発注日 */
  preOrderAt: {
    /** from */
    from: Date;
    /** to */
    to: Date;
  };
}
