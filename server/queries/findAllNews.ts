import { NewsCategoirsModel, NewsModel } from './../model/model';

export function findAllNews() {
    return NewsModel.findAll({
        order: ['opened_at'],
        include: [
            {
                model: NewsCategoirsModel
            },
        ],
    });
}
