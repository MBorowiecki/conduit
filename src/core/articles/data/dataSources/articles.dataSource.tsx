import axios from "axios";

import { serverAddress } from "core/config/server";
import { getProfileNameSlug } from "core/articles/helpers";
import { IProfile } from "core/interfaces";

import { IArticle } from "../interfaces";

// TODO: Error handling in all requests
export const getAllArticles = async (token?: string): Promise<IArticle[]> => {
  const config = token ? { headers: { Authorization: `Token: ${token}` } } : {};
  const response = await axios.get(`${serverAddress}/articles`, config);

  return response.data.articles;
};

export const getArticle = async (slug: string, token?: string): Promise<IArticle> => {
  const config = token ? { headers: { Authorization: `Token: ${token}` } } : {};

  const response = await axios.get(`${serverAddress}/articles/${slug}`, config);

  return response.data.article;
};

export const getArticlesByAuthor = async (author: IProfile, token?: string): Promise<IArticle[]> => {
  const authorSlug = getProfileNameSlug(author);
  const config = token ? { headers: { Authorization: `Token: ${token}` } } : {};

  const response = await axios.get(`${serverAddress}/articles?author=${authorSlug}`, config);

  return response.data.articles;
};

export const markArticleAsFavourite = async (slug: string, token: string, favourited: boolean): Promise<IArticle[]> => {
  const config = { headers: { Authorization: `Token: ${token}` } };

  const response = favourited
    ? await axios.post(`${serverAddress}/articles/${slug}/favorite`, {}, config)
    : await axios.delete(`${serverAddress}/articles/${slug}/favorite`, config);

  return response.data.articles;
};
