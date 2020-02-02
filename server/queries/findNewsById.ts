import { NewsModel } from '../model/model';
import { NewsCategoirsModel } from './../model/model';

export function findNewsById(id: number) {
    return NewsModel.findById(id, {
        include: [
            {
                model: NewsCategoirsModel
            }
        ]
    });
}
