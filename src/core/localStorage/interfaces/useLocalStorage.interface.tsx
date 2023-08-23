export interface IUseLocalStorageReturn<T> {
  get: () => T | undefined;
  set: (value: T) => void;
  remove: () => void;
  value: T | undefined;
}
