
interface News {
    'id': number;
    'category_id': number;
    'title': string;
    'content': string;
    'opened_at': string;
    'closed_at': string;
    'create_user_id': number;
    'created_at': string;
    'update_user_id': number;
    'updated_at': string;
    'is_deleted': boolean;
}

const NEWS: News[] = [
    {
        'id': 1,
        'category_id': 1,
        'title': 'タイトル１',
        'content': '本文１',
        'opened_at': '2020-02-02T15:23:01.000Z',
        'closed_at': '2020-03-30T15:23:01.000Z',
        'create_user_id': 1,
        'created_at': '2020-02-02T15:23:01.000Z',
        'update_user_id': 1,
        'updated_at': '2020-02-02T15:23:01.000Z',
        'is_deleted': false
    },
    {
        'id': 2,
        'category_id': 1,
        'title': 'タイトル２',
        'content': '本文１',
        'opened_at': '2020-02-02T15:23:01.000Z',
        'closed_at': null,
        'create_user_id': 1,
        'created_at': '2020-02-02T15:23:01.000Z',
        'update_user_id': 1,
        'updated_at': '2020-02-02T15:23:01.000Z',
        'is_deleted': false
    },
    {
        'id': 3,
        'category_id': 2,
        'title': 'タイトル３',
        'content': '本文１',
        'opened_at': '2020-02-02T15:23:01.000Z',
        'closed_at': null,
        'create_user_id': 1,
        'created_at': '2020-02-02T15:23:01.000Z',
        'update_user_id': 1,
        'updated_at': '2020-02-02T15:23:01.000Z',
        'is_deleted': false
    },
    {
        'id': 4,
        'category_id': 3,
        'title': 'タイトル４',
        'content': '本文１',
        'opened_at': '2020-02-02T15:23:01.000Z',
        'closed_at': null,
        'create_user_id': 1,
        'created_at': '2020-02-02T15:23:01.000Z',
        'update_user_id': 1,
        'updated_at': '2020-02-02T15:23:01.000Z',
        'is_deleted': false
    },
    {
        'id': 5,
        'category_id': 3,
        'title': 'タイトル５',
        'content': '本文１',
        'opened_at': '2020-02-02T15:23:01.000Z',
        'closed_at': null,
        'create_user_id': 1,
        'created_at': '2020-02-02T15:23:01.000Z',
        'update_user_id': 1,
        'updated_at': '2020-02-02T15:23:01.000Z',
        'is_deleted': false
    }
];

export function findNewsById(newsId: number): News {
    return NEWS.find(news => news.id = newsId);
}

export function findAllNews(): News[] {
    return NEWS;
}
