import { IFilledButtonProps } from "../interfaces";

export const FilledButton = ({ children, onClick, type, className, disabled }: IFilledButtonProps): JSX.Element => {
  return (
    <button className={`btn btn-${type} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
