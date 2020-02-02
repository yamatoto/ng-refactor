import * as ORM from 'Sequelize';
import { LoggingOptions } from 'Sequelize';
import { initNewsModel } from './initNewsModel';

const config = require('../config/config.json')['development'];

const options: LoggingOptions = {benchmark: true, logging: console.log};

const sequelize = new ORM(config.database, config.username, config.password, options);

export const NewsModel = initNewsModel(sequelize);
