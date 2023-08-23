import { FilledButton, OutlineButton } from "core/buttons";

import { IFavouriteButtonProps } from "../interfaces";

export const FavouriteButton = ({ article, text, toRight, onClick, disabled }: IFavouriteButtonProps): JSX.Element => {
  if (!article.favorited) {
    return (
      <OutlineButton
        type="primary"
        onClick={onClick}
        className={`btn-sm ${toRight && "pull-xs-right"}`}
        disabled={disabled}
      >
        <i className="ion-heart" />
        {text !== undefined && ` ${text}`} ({article.favoritesCount})
      </OutlineButton>
    );
  } else {
    return (
      <FilledButton
        type="primary"
        onClick={onClick}
        className={`btn-sm ${toRight && "pull-xs-right"}`}
        disabled={disabled}
      >
        <i className="ion-heart" />
        {text !== undefined && ` ${text}`} ({article.favoritesCount})
      </FilledButton>
    );
  }
};
