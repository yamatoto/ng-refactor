/* eslint-disable eqeqeq */
import * as Moment from 'moment';

interface Product {
  'id': number;
  'productNo': string;
  'productName': string;
  'deliveryAt': string;
  'createUserId': number;
  'createdAt': string;
  'updateUserId': number;
  'updatedAt': string;
  'isDeleted': boolean;
}

export interface ProductConditions {
  productNo: string;
  productName: string;
  deliveryAt: {
    from: string;
    to: string;
  };
}

const PRODUCTS: Product[] = [
  {
    'id': 1,
    'productNo': 'GII29010',
    'productName': '丸山商品1',
    'deliveryAt': '2020-03-26',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 2,
    'productNo': 'GII29020',
    'productName': '丸山商品2',
    'deliveryAt': '2020-03-27',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 3,
    'productNo': 'AAA29010',
    'productName': '柏原商品1',
    'deliveryAt': '2020-03-28',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 4,
    'productNo': 'AAA29020',
    'productName': '柏原商品2',
    'deliveryAt': '2020-03-29',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 5,
    'productNo': 'AAB29010',
    'productName': '小橋川商品1',
    'deliveryAt': '2020-03-30',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 6,
    'productNo': 'AAB29020',
    'productName': '小橋川商品2',
    'deliveryAt': '2020-03-31',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 7,
    'productNo': 'AAC29010',
    'productName': '垣内商品1',
    'deliveryAt': '2020-03-25',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 8,
    'productNo': 'AAC29020',
    'productName': '垣内商品2',
    'deliveryAt': '2020-03-24',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 9,
    'productNo': 'AAD29010',
    'productName': '李商品1',
    'deliveryAt': '2020-03-23',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  },
  {
    'id': 10,
    'productNo': 'AAD29020',
    'productName': '李商品2',
    'deliveryAt': '2020-03-22',
    'createUserId': 1,
    'createdAt': '2020-02-02',
    'updateUserId': 1,
    'updatedAt': '2020-02-02',
    'isDeleted': false
  }
];

export function findProductById(id: number): Product {
  return PRODUCTS.find(pro => pro.id = id);
}

export function findAllProducts(): Product[] {
  return PRODUCTS;
}

export function searchProducts(conditions: ProductConditions): Product[] {

  if (conditions.productNo != '') {
    return [PRODUCTS.find(pro => pro.productNo === conditions.productNo)];
  }

  if (conditions.productName != '') {
    return PRODUCTS.filter(pro => pro.productName.includes(conditions.productName));
  }

  let filteredByDate = PRODUCTS;
  if (conditions.deliveryAt.from != '') {
    filteredByDate = PRODUCTS.filter(pro => Moment(pro.deliveryAt).isSameOrAfter(Moment(conditions.deliveryAt.from)));
  }

  if (conditions.deliveryAt.to != '') {
    filteredByDate = filteredByDate.filter(pro => Moment(pro.deliveryAt).isSameOrBefore(Moment(conditions.deliveryAt.to)));
  }

  return filteredByDate;
}
