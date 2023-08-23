import { useContext, useEffect, useState } from "react";

import { ApplicationContext } from "core/context";
import { IProfile, RequestState } from "core/interfaces";
import { GetProfileDataInfo, IUseProfileInfoReturn } from "features/profile/data";

export const useProfileInfo = (slug: string): IUseProfileInfoReturn => {
  const [profileInfo, setProfileInfo] = useState<IProfile | undefined>();
  const [requestState, setRequestState] = useState<RequestState>(RequestState.IDLE);
  const { userProfile } = useContext(ApplicationContext);

  const get = async () => {
    setRequestState(RequestState.LOADING);

    try {
      const response = await GetProfileDataInfo(slug, userProfile?.token);

      if (response === undefined) {
        setRequestState(RequestState.ERROR);
        return;
      }

      setProfileInfo(response);
      setRequestState(RequestState.SUCCESS);
    } catch (error) {
      setRequestState(RequestState.ERROR);
    }
  };

  useEffect(() => {
    get();
  }, [userProfile]);

  return { profileInfo, requestState, get };
};
