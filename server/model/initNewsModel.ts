/* eslint-disable @typescript-eslint/camelcase */
import * as ORM from 'Sequelize';
import { Sequelize } from 'Sequelize';

export function initNewsModel(sequelize: Sequelize) {
    return sequelize.define('news', {
        id: {
            primaryKey: true,
            type: ORM.INTEGER
        },
        category_id: ORM.INTEGER,
        title: ORM.STRING,
        content: ORM.TEXT,
        opened_at: ORM.DATE,
        closed_at: ORM.DATE,
        create_user_id: ORM.INTEGER,
        created_at: ORM.DATE,
        update_user_id: ORM.INTEGER,
        updated_at: ORM.DATE,
        is_deleted: ORM.BOOLEAN
    }, {underscored: true});
}
