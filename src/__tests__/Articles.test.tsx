import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticlePreview } from "core/articles/presentation";
import { IArticle } from "core/articles/data";

describe("ArticlePreview", () => {
  const article: IArticle = {
    author: {
      bio: "I work at statefarm",
      following: false,
      image: "https://static.productionready.io/images/smiley-cyrus.jpg",
      username: "jake",
    },
    body: "His name was my name too.",
    createdAt: "2016-02-18T03:22:56.637Z",
    description: "Ever wonder how?",
    favorited: false,
    favoritesCount: 0,
    slug: "how-to-train-your-dragon",
    tagList: ["dragons", "training"],
    title: "How to train your dragon",
    updatedAt: "2016-02-18T03:48:35.824Z",
  };

  it("should render the article", () => {
    render(<ArticlePreview article={article} onFavouriteClick={() => {}} />);

    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.description)).toBeInTheDocument();
    expect(screen.getByText(article.author.username)).toBeInTheDocument();
  });

  it("should render the article meta", () => {
    render(<ArticlePreview article={article} onFavouriteClick={() => {}} />);

    expect(screen.getByText(article.author.username)).toBeInTheDocument();
  });
});
