import { RequestState } from "core/interfaces";
import { Navbar } from "core/navigation/components";
import { Banner } from "core/banner/presentation";
import { ArticlePreview } from "core/articles/presentation";

import { useArticles } from "../hooks";

export const ArticleList = (): JSX.Element => {
  const { articles, requestState, markAsFavourite } = useArticles(true);

  return (
    <>
      <Navbar />

      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              {requestState === RequestState.LOADING && <div>Loading...</div>}
              {requestState === RequestState.ERROR && <div>Something went wrong...</div>}
              {requestState === RequestState.SUCCESS &&
                articles.map(article => (
                  <ArticlePreview
                    key={new Date(article.createdAt).getTime()}
                    article={article}
                    onFavouriteClick={() => markAsFavourite(article, !article.favorited)}
                  />
                ))}
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" className="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" className="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    react
                  </a>
                  <a href="" className="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" className="tag-pill tag-default">
                    node
                  </a>
                  <a href="" className="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <a href="/#" className="logo-font">
            conduit
          </a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};
