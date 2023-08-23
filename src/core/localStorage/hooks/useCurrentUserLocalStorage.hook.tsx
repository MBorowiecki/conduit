import { useEffect, useState } from "react";
import { IUseLocalStorageReturn } from "../interfaces";
import { ILoggedProfile } from "core/interfaces";

export const useLocalStorage = (key: string, getOnInit = false): IUseLocalStorageReturn<ILoggedProfile> => {
  const [value, setValue] = useState<ILoggedProfile | undefined>();

  const get = () => {
    const item = localStorage.getItem(key);

    if (item) {
      setValue(JSON.parse(item));

      return JSON.parse(item);
    }
  };

  const set = (value: ILoggedProfile) => {
    localStorage.setItem(key, JSON.stringify(value));

    setValue(value);
  };

  const remove = () => {
    localStorage.removeItem(key);

    setValue(undefined);
  };

  useEffect(() => {
    if (getOnInit) {
      get();
    }
  }, [getOnInit]);

  return {
    get,
    remove,
    set,
    value,
  };
};
