import { NewsCategory } from '@shared/enums/news-catogory.enum';
import { Table } from './table.model';

export class News extends Table {
  /** カテゴリID */
  categoryId: NewsCategory;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 公開日 */
  openedAt: string;
  /** 公開終了日 */
  closedAt: string;
}
