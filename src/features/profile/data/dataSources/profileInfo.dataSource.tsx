import axios from "axios";

import { serverAddress } from "core/config/server";
import { IProfile } from "core/interfaces";

export const GetProfileDataInfo = async (username: string, token?: string): Promise<IProfile | undefined> => {
  const config = token ? { headers: { Authorization: `Token: ${token}` } } : undefined;

  const response = await axios.get(`${serverAddress}/profiles/${username}`, config);

  return response.data.profile;
};
