import type { Request, Response } from "@tinyhttp/app";

export const get = async (req: Request, res: Response): Promise<void> => {
  res.end("you made a get request");
};

export const post = async (req: Request, res: Response): Promise<void> => {
  res.end("you made a post request");
};
