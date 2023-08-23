import { IOutlineButtonProps } from "../interfaces";

export const OutlineButton = ({ children, onClick, type, className, disabled }: IOutlineButtonProps): JSX.Element => {
  return (
    <button className={`btn btn-outline-${type} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
