import { useParams } from "react-router-dom";
import { useContext } from "react";

import { RequestState } from "core/interfaces";
import { FavouriteButton, FollowButton } from "core/buttons";
import { ArticleMeta } from "core/articles/presentation";
import { Footer } from "core/footer/components";
import { ApplicationContext } from "core/context";
import { useProfileFollow } from "core/profile/presentation";
import { Navbar } from "core/navigation/components";
import { IArticleRouteParams } from "core/articles/data";

import { useArticle } from "../hooks";

export const Article = (): JSX.Element => {
  const { slug } = useParams<IArticleRouteParams>();
  const { article, requestState, markAsFavourite, get } = useArticle(slug);
  const { userProfile } = useContext(ApplicationContext);
  const { followUser, unfollowUser } = useProfileFollow();

  return (
    <>
      <Navbar />

      {requestState === RequestState.LOADING && <div>Loading...</div>}

      {requestState === RequestState.SUCCESS && article && (
        <div className="article-page">
          <div className="banner">
            <div className="container">
              <h1>{article.title}</h1>

              <ArticleMeta
                article={article}
                actionButtons={[
                  <FollowButton
                    key={0}
                    disabled={userProfile === undefined}
                    text={`${article.author.following ? "Unfollow" : "Follow"} ${article.author.username}`}
                    onClick={() => {
                      if (article.author.following) unfollowUser(article.author).then(() => get());
                      else followUser(article.author).then(() => get());
                    }}
                    type={article.author.following ? "filled" : "outlined"}
                  />,
                  <span key={1}>&nbsp;&nbsp;</span>,
                  <FavouriteButton
                    key={2}
                    article={article}
                    onClick={() => {
                      if (userProfile !== undefined) markAsFavourite(article, !article.favorited);
                    }}
                    text="&nbsp;Favorite Post"
                    disabled={userProfile === undefined}
                  />,
                ]}
              />
            </div>
          </div>

          <div className="container page">
            <div className="row article-content">
              <div className="col-md-12">{article.body}</div>
            </div>

            <hr />

            <div className="article-actions">
              <ArticleMeta
                article={article}
                actionButtons={[
                  <FollowButton
                    key={0}
                    disabled={userProfile === undefined}
                    text={`${article.author.following ? "Unfollow" : "Follow"} ${article.author.username}`}
                    onClick={() => {
                      if (article.author.following) unfollowUser(article.author).then(() => get());
                      else followUser(article.author).then(() => get());
                    }}
                    type={article.author.following ? "filled" : "outlined"}
                  />,
                  <span key={1}>&nbsp;&nbsp;</span>,
                  <FavouriteButton
                    key={2}
                    article={article}
                    text="Favorite Post"
                    onClick={() => markAsFavourite(article, !article.favorited)}
                  />,
                ]}
              />
            </div>

            <div className="row">
              <div className="col-xs-12 col-md-8 offset-md-2">
                <form className="card comment-form">
                  <div className="card-block">
                    <textarea className="form-control" placeholder="Write a comment..." rows={3} />
                  </div>
                  <div className="card-footer">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    <button className="btn btn-sm btn-primary">Post Comment</button>
                  </div>
                </form>

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div className="card-footer">
                    <a href="/#/profile/jacobschmidt" className="comment-author">
                      <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="/#/profile/jacobschmidt" className="comment-author">
                      Jacob Schmidt
                    </a>
                    <span className="date-posted">Dec 29th</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div className="card-footer">
                    <a href="/#/profile/jacobschmidt" className="comment-author">
                      <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="/#/profile/jacobschmidt" className="comment-author">
                      Jacob Schmidt
                    </a>
                    <span className="date-posted">Dec 29th</span>
                    <span className="mod-options">
                      <i className="ion-edit" />
                      <i className="ion-trash-a" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
