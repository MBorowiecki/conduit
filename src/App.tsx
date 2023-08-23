import { useEffect, useState } from "react";

import { ApplicationRouter } from "core/navigation/components";
import { ApplicationContext } from "core/context";
import { ILoggedProfile } from "core/interfaces";
import { useLocalStorage } from "core/localStorage/hooks/useCurrentUserLocalStorage.hook";

const App = (): JSX.Element => {
  const { get: getUserProfile, remove: removeUserProfile } = useLocalStorage("userProfile", true);
  const [profile, setProfile] = useState<ILoggedProfile>();

  // TODO: Check if user token is valid
  useEffect(() => {
    const userProfile = getUserProfile();

    if (userProfile) {
      setProfile(userProfile);
    } else {
      removeUserProfile();
    }
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        userProfile: profile,
        setUserProfile: setProfile,
      }}
    >
      <ApplicationRouter />
    </ApplicationContext.Provider>
  );
};

export default App;
