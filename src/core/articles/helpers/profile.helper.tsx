import { IProfile } from "core/interfaces";

export const getProfileNameSlug = (profile: IProfile): string => {
  return profile.username.split(" ").join("-").toLowerCase();
};
