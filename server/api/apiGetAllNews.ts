import { Request, Response } from 'express';
import { findAllNews } from '../queries/findAllNews';

export function agiGetAllNews(req: Request, res: Response) {
    findAllNews()
        .then(results => {
            res.status(200).json({ results });
        })
        .catch(err => {
            throw new Error('Error Ocurred:' + err);
        });
};
