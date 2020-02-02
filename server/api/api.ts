import { Application } from 'express';
import { agiGetAllNews } from './apiGetAllNews';
import { agiGetNewsById } from './apiGetNewsById';

export function initRestApi(app: Application) {
    app.route('/api/news').get(agiGetAllNews);
    app.route('/api/news/:id').get(agiGetNewsById);
}
