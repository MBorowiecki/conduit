import { IArticle } from "core/articles/data";
import { IProfile, RequestState } from "core/interfaces";

export interface IUseProfileInfoReturn {
  profileInfo?: IProfile;
  requestState: RequestState;
  get: () => Promise<void>;
}

export interface IUseProfileArticlesReturn {
  articles?: IArticle[];
  requestState: RequestState;
  markAsFavourite: (article: IArticle, favourited: boolean) => Promise<void>;
  setTargetProfile: (profile: IProfile | undefined) => void;
}
