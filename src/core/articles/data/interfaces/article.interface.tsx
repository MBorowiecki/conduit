import { IProfile } from "core/interfaces/profile.interface";

export interface IArticle {
  author: IProfile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}

export interface IArticleRouteParams {
  slug: string;
}

export interface IArticleMetaProps {
  article: IArticle;
  actionButtons?: JSX.Element | JSX.Element[];
}
