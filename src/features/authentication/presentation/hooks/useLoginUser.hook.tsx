import { useState } from "react";

import { IUseLoginUserReturn, loginUser } from "features/authentication/data";
import { RequestState } from "core/interfaces";
import { useLocalStorage } from "core/localStorage";

export const useLoginUser = (): IUseLoginUserReturn => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requestState, setRequestState] = useState<RequestState>(RequestState.IDLE);
  const [errors, setErrors] = useState<string[]>([]);

  const { set: setUserProfile } = useLocalStorage("userProfile");

  const login = async () => {
    if (email.length <= 0 && password.length <= 0) return;

    setRequestState(RequestState.LOADING);

    const response = await loginUser({ email, password });

    if (response instanceof Array) {
      setErrors(response);
      setRequestState(RequestState.ERROR);
      return;
    } else {
      setErrors([]);
      setRequestState(RequestState.SUCCESS);
      setUserProfile(response);
      return response;
    }
  };

  return {
    email,
    password,
    requestState,
    errors,
    setEmail,
    setPassword,
    login,
  };
};
