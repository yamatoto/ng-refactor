import { Request, Response } from 'express';
import { onSuccess } from '../common/onSuccess';
import { findAllNews } from './data';

export function agiGetAllNews(req: Request, res: Response) {
    onSuccess(res, findAllNews());
};
