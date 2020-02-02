import { Application } from 'express';
import { agiGetAllNews } from './apiGetAllNews';

export function initRestApi(app: Application) {
    app.route('/api/news').get(agiGetAllNews);
}
