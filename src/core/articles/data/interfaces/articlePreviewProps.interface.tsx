import { IArticle } from "./article.interface";

export interface IArticlePreviewProps {
  article: IArticle;
  onFavouriteClick: () => void;
}
