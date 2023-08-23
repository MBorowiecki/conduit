import { useContext, useEffect, useState } from "react";

import { RequestState } from "core/interfaces";
import { getAllArticles, IArticle, markArticleAsFavourite } from "core/articles/data";
import { ApplicationContext } from "core/context";
import { IUseArticlesReturn } from "features/articles/data";

export const useArticles = (getOnInit = false): IUseArticlesReturn => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [requestState, setRequestState] = useState<RequestState>(RequestState.IDLE);
  const { userProfile } = useContext(ApplicationContext);

  const getAll = async () => {
    setRequestState(RequestState.LOADING);

    try {
      const response = await getAllArticles(userProfile?.token);

      setArticles(response);
      setRequestState(RequestState.SUCCESS);
    } catch (error) {
      console.error(error);
      setRequestState(RequestState.ERROR);
    }
  };

  const markAsFavourite = async (article: IArticle, favourited: boolean) => {
    if (!userProfile) return;

    await markArticleAsFavourite(article.slug, userProfile.token, favourited);

    // TODO: Update only one article after mark as favourite
    await getAll();
  };

  useEffect(() => {
    if (getOnInit) getAll();
  }, [getOnInit]);

  useEffect(() => {
    getAll();
  }, [userProfile]);

  return {
    articles,
    getAll,
    requestState,
    markAsFavourite,
  };
};
