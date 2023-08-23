import { IProfile } from "core/interfaces";

export const getProfileNameSlug = (profile: IProfile): string => {
  return profile.username.split(" ").join("-").toLowerCase();
};

export const getImageOrPlaceholder = (profile: IProfile): string => {
  return profile.image.length > 0
    ? profile.image
    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
};
