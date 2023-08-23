import { IArticle } from "core/articles/data";
import { MouseEventHandler } from "react";

export interface IButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

export interface IOutlineButtonProps extends IButtonProps {
  type: "primary" | "secondary" | "danger";
}

export interface IFilledButtonProps extends IButtonProps {
  type: "primary" | "secondary";
}

export interface IFavouriteButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  text?: string;
  toRight?: boolean;
  article: IArticle;
}

export interface IFollowButtonProps {
  text?: string;
  toRight?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type: "filled" | "outlined";
}
