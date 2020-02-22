
interface News {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  openedAt: string;
  closedAt: string;
  createUserId: number;
  createdAt: string;
  updateUserId: number;
  updatedAt: string;
  isDeleted: boolean;
}

const NEWS: News[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'タイトル１',
    content: '本文１',
    openedAt: '2020-02-02T15:23:01.000Z',
    closedAt: '2020-03-30T15:23:01.000Z',
    createUserId: 1,
    createdAt: '2020-02-02T15:23:01.000Z',
    updateUserId: 1,
    updatedAt: '2020-02-02T15:23:01.000Z',
    isDeleted: false
  },
  {
    id: 2,
    categoryId: 1,
    title: 'タイトル２',
    content: '本文１',
    openedAt: '2020-02-02T15:23:01.000Z',
    closedAt: null,
    createUserId: 1,
    createdAt: '2020-02-02T15:23:01.000Z',
    updateUserId: 1,
    updatedAt: '2020-02-02T15:23:01.000Z',
    isDeleted: false
  },
  {
    id: 3,
    categoryId: 2,
    title: 'タイトル３',
    content: '本文１',
    openedAt: '2020-02-02T15:23:01.000Z',
    closedAt: null,
    createUserId: 1,
    createdAt: '2020-02-02T15:23:01.000Z',
    updateUserId: 1,
    updatedAt: '2020-02-02T15:23:01.000Z',
    isDeleted: false
  },
  {
    id: 4,
    categoryId: 3,
    title: 'タイトル４',
    content: '本文１',
    openedAt: '2020-02-02T15:23:01.000Z',
    closedAt: null,
    createUserId: 1,
    createdAt: '2020-02-02T15:23:01.000Z',
    updateUserId: 1,
    updatedAt: '2020-02-02T15:23:01.000Z',
    isDeleted: false
  },
  {
    id: 5,
    categoryId: 3,
    title: 'タイトル５',
    content: '本文１',
    openedAt: '2020-02-02T15:23:01.000Z',
    closedAt: null,
    createUserId: 1,
    createdAt: '2020-02-02T15:23:01.000Z',
    updateUserId: 1,
    updatedAt: '2020-02-02T15:23:01.000Z',
    isDeleted: false
  }
];

export function findNewsById(id: number): News {
  return NEWS.find(news => news.id = id);
}

export function findAllNews(): News[] {
  return NEWS;
}
