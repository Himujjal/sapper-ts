import type { TFetch } from "./fetch";
import type { TPost } from "./posts";

export type TSlug = {};

export type TSlugPreThis = {
  fetch: TFetch;
  error: (number, string) => void;
};

export type TSlugPreOptions = {
  params: TPost;
  query: object;
};

export type TSlugPreReturn = Promise<void | { post: TPost }>;
