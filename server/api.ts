import { Application } from 'express';
import { authLoginUser } from './auth/authLoginUser';
import { agiGetAllNews } from './news/apiGetAllNews';
import { agiGetNewsById } from './news/apiGetNewsById';
import { agiPostSearchProducts } from './products/agiPostSearchProducts';

export function initRestApi(app: Application) {
  app.route('/api/login').post(authLoginUser);

  app.route('/api/news').get(agiGetAllNews);
  app.route('/api/news/:id').get(agiGetNewsById);

  app.route('/api/products').post(agiPostSearchProducts);
}
