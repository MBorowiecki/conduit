import { useContext, useEffect, useState } from "react";

import { IArticle, getArticlesByAuthor, markArticleAsFavourite } from "core/articles/data";
import { ApplicationContext } from "core/context";
import { IProfile, RequestState } from "core/interfaces";
import { IUseProfileArticlesReturn } from "features/profile/data";

export const useProfileArticles = (): IUseProfileArticlesReturn => {
  const [articles, setArticles] = useState<IArticle[] | undefined>();
  const [requestState, setRequestState] = useState<RequestState>(RequestState.IDLE);
  const [targetProfile, setTargetProfile] = useState<IProfile | undefined>();
  const { userProfile } = useContext(ApplicationContext);

  const get = async (profile: IProfile) => {
    setRequestState(RequestState.LOADING);

    try {
      const response = await getArticlesByAuthor(profile, userProfile?.token);
      console.log(response);

      setArticles(response);
      setRequestState(RequestState.SUCCESS);
    } catch (error) {
      console.log(error);
      setRequestState(RequestState.ERROR);
    }
  };

  const markAsFavourite = async (article: IArticle, favourited: boolean) => {
    if (!userProfile) return;

    await markArticleAsFavourite(article.slug, userProfile.token, favourited);

    if (!targetProfile) return;
    await get(targetProfile);
  };

  useEffect(() => {
    if (!targetProfile) return;

    get(targetProfile);
  }, [targetProfile]);

  return { articles, requestState, markAsFavourite, setTargetProfile };
};
