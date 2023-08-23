import { useContext, useEffect, useState } from "react";

import { ApplicationContext } from "core/context";
import { IUseArticleReturn } from "features/articles/data";
import { RequestState } from "core/interfaces";
import { IArticle, getArticle, markArticleAsFavourite } from "core/articles/data";

export const useArticle = (slug: string): IUseArticleReturn => {
  const [article, setArticle] = useState<IArticle | undefined>();
  const [requestState, setRequestState] = useState<RequestState>(RequestState.IDLE);
  const { userProfile } = useContext(ApplicationContext);

  const get = async () => {
    setRequestState(RequestState.LOADING);

    try {
      const response = await getArticle(slug, userProfile?.token);

      setArticle(response);
      setRequestState(RequestState.SUCCESS);
    } catch (err) {
      setRequestState(RequestState.ERROR);
    }
  };

  // TODO: Move body of this method to another feature layer "domain" where is business logic
  const markAsFavourite = async (article: IArticle, favourited: boolean) => {
    if (!userProfile) return;

    await markArticleAsFavourite(article.slug, userProfile.token, favourited);

    // TODO: Update only one article after mark as favourite
    await get();
  };

  useEffect(() => {
    get();
  }, [userProfile]);

  return {
    article,
    get,
    requestState,
    markAsFavourite,
  };
};
