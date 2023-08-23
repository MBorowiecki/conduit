import { IArticle } from "core/articles/data";
import { RequestState } from "core/interfaces";

export interface IUseArticleReturn {
  article?: IArticle;
  get: () => Promise<void>;
  requestState: RequestState;
  markAsFavourite: (article: IArticle, favourited: boolean) => Promise<void>;
}

export interface IUseArticlesReturn {
  articles: IArticle[];
  getAll: () => Promise<void>;
  requestState: RequestState;
  markAsFavourite: (article: IArticle, favourited: boolean) => Promise<void>;
}
