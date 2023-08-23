import { useContext } from "react";

import { FavouriteButton } from "core/buttons";
import { IArticlePreviewProps } from "core/articles/data";
import { ApplicationContext } from "core/context";

import { ArticleMeta } from "./ArticleMeta.component";

export const ArticlePreview = ({ article, onFavouriteClick }: IArticlePreviewProps): JSX.Element => {
  const { userProfile } = useContext(ApplicationContext);

  return (
    <div className="article-preview">
      <ArticleMeta
        article={article}
        actionButtons={
          <FavouriteButton
            article={article}
            toRight
            onClick={event => {
              event.preventDefault();
              if (userProfile !== undefined) onFavouriteClick();
            }}
            disabled={userProfile === undefined}
          />
        }
      />
      <a href={`/#/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};
