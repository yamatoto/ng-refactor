import * as Moment from 'moment';

interface Product {
  id: number;
  brandCode: string;
  itemCode: string;
  serialNumber: number;
  seasonCode: string;
  sunSeasonCode: string;
  fiscalYear: number;
  productNo: string;
  productName: string;
  productNameKana: string;
  preOrderAt: string;
  makerId: number;
  createUserId: number;
  createdAt: string;
  updateUserId: number;
  updatedAt: string;
  isDeleted: boolean;
}

export interface ProductConditions {
  brandCode: string;
  itemCode: string;
  seasonCode: string;
  sunSeasonCode: string;
  fiscalYear: number;
  productNo: string;
  productName: string;
  preOrderAt: {
    from: string;
    to: string;
  };
  makerId: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    brandCode: 'GI',
    itemCode: 'I',
    serialNumber: 29010,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'GII29010',
    productName: '商品あああ',
    productNameKana: 'ショウヒンアアア',
    preOrderAt: '2020-03-26',
    makerId: 1,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 2,
    brandCode: 'GI',
    itemCode: 'I',
    serialNumber: 29020,
    seasonCode: 'A',
    sunSeasonCode: '2',
    fiscalYear: 2019,
    productNo: 'GII29020',
    productName: '商品ああい',
    productNameKana: 'ショウヒンアアイ',
    preOrderAt: '2020-03-27',
    makerId: 1,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 3,
    brandCode: 'AA',
    itemCode: 'A',
    serialNumber: 29010,
    seasonCode: 'B',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'AAA29010',
    productName: '商品あいう',
    productNameKana: 'ショウヒンアイウ',
    preOrderAt: '2020-03-28',
    makerId: 2,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 4,
    brandCode: 'AA',
    itemCode: 'A',
    serialNumber: 29020,
    seasonCode: 'B',
    sunSeasonCode: '2',
    fiscalYear: 2019,
    productNo: 'AAA29020',
    productName: '商品あいうえ',
    productNameKana: 'ショウヒンアイウエ',
    makerId: 2,
    preOrderAt: '2020-03-29',
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 5,
    brandCode: 'AA',
    itemCode: 'B',
    serialNumber: 29010,
    seasonCode: 'C',
    sunSeasonCode: '9',
    fiscalYear: 2019,
    productNo: 'AAB29010',
    productName: '商品あいうえお',
    productNameKana: 'ショウヒンアイウエオ',
    preOrderAt: '2020-03-30',
    makerId: 3,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 6,
    brandCode: 'AA',
    itemCode: 'B',
    serialNumber: 29020,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'AAB29020',
    productName: '商品かきくけ',
    productNameKana: 'ショウヒンカキクケ',
    preOrderAt: '2020-03-31',
    makerId: 3,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 7,
    brandCode: 'AB',
    itemCode: 'A',
    serialNumber: 29010,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'ABA29010',
    productName: '商品けこ',
    productNameKana: 'ショウヒンケコ',
    preOrderAt: '2020-03-25',
    makerId: 4,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 8,
    brandCode: 'AB',
    itemCode: 'C',
    serialNumber: 29020,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'ABC29020',
    productName: '商品さしす',
    productNameKana: 'ショウヒンサシス',
    preOrderAt: '2020-03-24',
    makerId: 5,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 9,
    brandCode: 'BA',
    itemCode: 'A',
    serialNumber: 29010,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'AAD29010',
    productName: '商品たちつ',
    productNameKana: 'ショウヒンタチツ',
    preOrderAt: '2020-03-23',
    makerId: 6,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  },
  {
    id: 10,
    brandCode: 'BA',
    itemCode: 'A',
    serialNumber: 29020,
    seasonCode: 'A',
    sunSeasonCode: '1',
    fiscalYear: 2019,
    productNo: 'BAA29020',
    productName: '商品てと',
    productNameKana: 'ショウヒンテト',
    preOrderAt: '2020-03-22',
    makerId: 6,
    createUserId: 1,
    createdAt: '2020-02-02',
    updateUserId: 1,
    updatedAt: '2020-02-02',
    isDeleted: false
  }
];

export function findProductById(id: number): Product {
  return PRODUCTS.find(pro => pro.id = id);
}

export function findAllProducts(): Product[] {
  return PRODUCTS;
}

export function searchProducts(conditions: ProductConditions): Product[] {

  if (conditions.productNo !== '') {
    return [PRODUCTS.find(pro => pro.productNo === conditions.productNo)];
  }

  if (conditions.productName !== '') {
    return PRODUCTS.filter(pro => pro.productName.includes(conditions.productName));
  }

  let filteredByDate = PRODUCTS;
  if (conditions.preOrderAt.from !== '') {
    filteredByDate = PRODUCTS.filter(pro => Moment(pro.preOrderAt).isSameOrAfter(Moment(conditions.preOrderAt.from)));
  }

  if (conditions.preOrderAt.to !== '') {
    filteredByDate = filteredByDate.filter(pro => Moment(pro.preOrderAt).isSameOrBefore(Moment(conditions.preOrderAt.to)));
  }

  return filteredByDate;
}
