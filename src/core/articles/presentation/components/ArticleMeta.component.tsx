import { format } from "date-fns";

import { IArticleMetaProps } from "core/articles/data";
import { getImageOrPlaceholder, getProfileNameSlug } from "core/articles/helpers";

export const ArticleMeta = ({ article, actionButtons }: IArticleMetaProps): JSX.Element => {
  const author = article.author;

  return (
    <div className="article-meta">
      <a href={`/#/profile/${getProfileNameSlug(author)}`}>
        <img src={getImageOrPlaceholder(author)} />
      </a>
      <div className="info">
        <a href={`/#/profile/${getProfileNameSlug(author)}`} className="author">
          {author.username}
        </a>
        <span className="date">{format(new Date(article.createdAt), "MMMM do")}</span>
      </div>
      {actionButtons}
    </div>
  );
};
