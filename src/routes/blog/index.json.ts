import type { Request, Response } from "@tinyhttp/app";
import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export function get(_: Request, res: Response) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
