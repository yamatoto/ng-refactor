import { Request, Response } from 'express';
import { onSuccess } from '../common/onSuccess';
import { searchProducts } from './data';

export function agiPostSearchProducts(req: Request, res: Response) {
  onSuccess(res, searchProducts(req.body));
};
