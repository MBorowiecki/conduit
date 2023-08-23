import { useContext } from "react";

import { ApplicationContext } from "core/context";
import { IProfile } from "core/interfaces";
import { FollowUser, UnfollowUser } from "core/profile/data";

export const useProfileFollow = (): {
  followUser: (targetUser: IProfile) => Promise<IProfile | undefined>;
  unfollowUser: (targetUser: IProfile) => Promise<IProfile | undefined>;
} => {
  const { userProfile } = useContext(ApplicationContext);

  const followUser = async (targetUser: IProfile) => {
    if (!userProfile) return;

    const response = await FollowUser(targetUser.username, userProfile.token);

    return response;
  };

  const unfollowUser = async (targetUser: IProfile) => {
    if (!userProfile) return;

    const response = await UnfollowUser(targetUser.username, userProfile.token);

    return response;
  };

  return { followUser, unfollowUser };
};
