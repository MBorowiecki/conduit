import { ILoggedProfile } from "core/interfaces";

export interface IUseProfileSettingsReturn {
  logout: () => void;
  userProfile: ILoggedProfile | undefined;
}
