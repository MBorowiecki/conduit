import { useContext } from "react";

import { ApplicationContext } from "core/context";
import { useLocalStorage } from "core/localStorage";
import { IUseProfileSettingsReturn } from "features/settings/data";

// TODO: Implement profile settings
export const useProfileSettings = (): IUseProfileSettingsReturn => {
  const { remove: removeUserProfile } = useLocalStorage("userProfile");
  const { setUserProfile, userProfile } = useContext(ApplicationContext);

  const logout = () => {
    removeUserProfile();
    setUserProfile(undefined);
  };

  return {
    logout,
    userProfile,
  };
};
