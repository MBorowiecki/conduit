import axios from "axios";

import { serverAddress } from "core/config/server";
import { IProfile } from "core/interfaces";

export const FollowUser = async (usernameToFollow: string, token: string): Promise<IProfile> => {
  const config = { headers: { Authorization: `Token: ${token}` } };
  const response = await axios.post(`${serverAddress}/profiles/${usernameToFollow}/follow`, {}, config);

  return response.data;
};

export const UnfollowUser = async (usernameToUnfollow: string, token: string): Promise<IProfile> => {
  const config = { headers: { Authorization: `Token: ${token}` } };
  const response = await axios.delete(`${serverAddress}/profiles/${usernameToUnfollow}/follow`, config);

  return response.data;
};
