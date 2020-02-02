import * as ORM from 'Sequelize';
import { Options } from 'Sequelize';
import { initNewsCategoriesModel } from './initNewsCategoriesModel';
import { initNewsModel } from './initNewsModel';

const config = require('../config/config.json')['development'];

const options: Options = {logging: console.log, dialect: config.dialect};

const sequelize = new ORM(config.database, config.username, config.password, options);

export const NewsModel = initNewsModel(sequelize);
export const NewsCategoirsModel = initNewsCategoriesModel(sequelize);

NewsModel.hasMany(NewsCategoirsModel, { foreignKey: 'id' });
NewsCategoirsModel.belongsTo(NewsModel, { foreignKey: 'id' });
