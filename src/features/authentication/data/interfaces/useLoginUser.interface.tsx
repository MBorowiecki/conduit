import { ILoggedProfile, RequestState } from "core/interfaces";

export interface IUseLoginUserReturn {
  email: string;
  password: string;
  requestState: RequestState;
  errors: string[];
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  login: () => Promise<ILoggedProfile | undefined>;
}
