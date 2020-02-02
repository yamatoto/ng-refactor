/* eslint-disable @typescript-eslint/camelcase */
import * as ORM from 'Sequelize';
import { Sequelize } from 'Sequelize';

export function initNewsCategoriesModel(sequelize: Sequelize) {
    return sequelize.define('news_categories', {
        id: {
            primaryKey: true,
            type: ORM.INTEGER
        },
        name: ORM.STRING,
        create_user_id: ORM.INTEGER,
        created_at: ORM.DATE,
        update_user_id: ORM.INTEGER,
        updated_at: ORM.DATE,
        is_deleted: ORM.BOOLEAN
    }, {underscored: true});
}
