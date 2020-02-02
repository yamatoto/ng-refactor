import { Request, Response } from 'express';
import * as _ from 'lodash';
import { findAllNews } from '../queries/findAllNews';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function agiGetAllNews(req: Request, res: Response) {
    findAllNews()
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, 'Find All News Failed'));
};
