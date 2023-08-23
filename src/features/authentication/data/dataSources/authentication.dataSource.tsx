import axios from "axios";

import { ILoggedProfile, IRequestProfile } from "core/interfaces";
import { serverAddress } from "core/config/server";

export const loginUser = async (userInfo: IRequestProfile): Promise<ILoggedProfile | string[]> => {
  const response = await axios.post(`${serverAddress}/users/login`, { user: userInfo });

  if (response.status === 200) return response.data.user;
  else if (response.status === 401) return ["Invalid email or password"];
  else {
    return response.data.errors.body;
  }
};
