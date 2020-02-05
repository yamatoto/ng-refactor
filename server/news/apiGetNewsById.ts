import { Request, Response } from 'express';
import { onSuccess } from '../common/onSuccess';
import { findNewsById } from './data';

export function agiGetNewsById(req: Request, res: Response) {
    const newsId = parseInt(req.params.id);
    onSuccess(res, findNewsById(newsId));
};
