import { NewsCategory } from '../enums/news-catogory.enum';

export interface News {
    id: number;
    categoryId: NewsCategory;
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
