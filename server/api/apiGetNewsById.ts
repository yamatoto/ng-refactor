import { Request, Response } from 'express';
import * as _ from 'lodash';
import { findNewsById } from '../queries/findNewsById';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function agiGetNewsById(req: Request, res: Response) {
    const newsId = parseInt(req.params.id);
    findNewsById(newsId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, 'Find News By Id Failed'));
};
