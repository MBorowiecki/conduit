import { createContext } from "react";

import { IApplicationContext } from "../interfaces";

const ApplicationContext = createContext<IApplicationContext>({
  userProfile: undefined,
  setUserProfile: () => {},
});

export default ApplicationContext;
