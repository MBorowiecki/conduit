import { ILoggedProfile } from "core/interfaces";

export interface IApplicationContext {
  userProfile?: ILoggedProfile;
  setUserProfile: (profile?: ILoggedProfile) => void;
}
