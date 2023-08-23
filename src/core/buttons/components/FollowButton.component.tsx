import { FilledButton, OutlineButton } from "core/buttons";

import { IFollowButtonProps } from "../interfaces";

export const FollowButton = ({ text, toRight, onClick, disabled, type }: IFollowButtonProps): JSX.Element => {
  if (type === "filled") {
    return (
      <FilledButton
        type="secondary"
        onClick={onClick}
        className={`btn-sm ${toRight && "pull-xs-right"}`}
        disabled={disabled}
      >
        <i className="ion-plus-round" />
        {text !== undefined && ` ${text}`}
      </FilledButton>
    );
  } else {
    return (
      <OutlineButton
        type="secondary"
        onClick={onClick}
        className={`btn-sm ${toRight && "pull-xs-right"}`}
        disabled={disabled}
      >
        <i className="ion-plus-round" />
        {text !== undefined && ` ${text}`}
      </OutlineButton>
    );
  }
};
