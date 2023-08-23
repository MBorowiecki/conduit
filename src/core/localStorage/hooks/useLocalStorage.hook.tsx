import { useEffect, useState } from "react";
import { IUseLocalStorageReturn } from "../interfaces";

export const useLocalStorage = <T,>(key: string, getOnInit = false): IUseLocalStorageReturn<T> => {
  const [value, setValue] = useState<T | undefined>();

  const get = () => {
    const item = localStorage.getItem(key);

    if (item) {
      setValue(JSON.parse(item));

      return JSON.parse(item) as T;
    }
  };

  const set = (value: T) => {
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
