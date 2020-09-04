import posts from "./_posts.js";
import type { Request, Response, NextFunction } from "@tinyhttp/app";

const lookup = new Map();

posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req: Request, res: Response, next: NextFunction) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
