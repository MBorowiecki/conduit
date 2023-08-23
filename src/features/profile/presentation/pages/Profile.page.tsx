import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FollowButton } from "core/buttons";
import { Navbar } from "core/navigation/components";
import { RequestState } from "core/interfaces";
import { ArticlePreview } from "core/articles/presentation";
import { Footer } from "core/footer/components";
import { IProfileInfoPageParams } from "features/profile/data";
import { useProfileFollow } from "core/profile/presentation";
import { ApplicationContext } from "core/context";

import { useProfileArticles, useProfileInfo } from "../hooks";
import { getImageOrPlaceholder } from "core/articles/helpers";

export const Profile = (): JSX.Element => {
  const { username } = useParams<IProfileInfoPageParams>();
  const { profileInfo, get } = useProfileInfo(username);
  const { followUser, unfollowUser } = useProfileFollow();
  const { userProfile } = useContext(ApplicationContext);

  const { articles, requestState, markAsFavourite, setTargetProfile } = useProfileArticles();

  useEffect(() => {
    if (profileInfo) {
      setTargetProfile(profileInfo);
    }
  }, [profileInfo, setTargetProfile]);

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profileInfo && getImageOrPlaceholder(profileInfo)} className="user-img" />
                <h4>{profileInfo?.username}</h4>
                <p>{profileInfo?.bio}</p>

                {profileInfo && (userProfile === undefined || userProfile.username !== profileInfo.username) && (
                  <FollowButton
                    text={`${profileInfo.following ? "Unfollow" : "Follow"} ${profileInfo.username}`}
                    toRight
                    onClick={() => {
                      if (profileInfo.following) {
                        unfollowUser(profileInfo).then(() => get());
                      } else {
                        followUser(profileInfo).then(() => get());
                      }
                    }}
                    type={profileInfo.following ? "filled" : "outlined"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {requestState !== RequestState.SUCCESS && <div>Loading...</div>}
              {requestState === RequestState.SUCCESS &&
                articles?.map(article => {
                  return (
                    <ArticlePreview
                      article={article}
                      key={new Date(article.createdAt).getTime()}
                      onFavouriteClick={() => markAsFavourite(article, !article.favorited)}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
