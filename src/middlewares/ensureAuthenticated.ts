import { Request, Response, NextFunction } from "express";
import { verify, decode } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //receive token
  const authToken = request.headers.authorization;

  //check if token is filled
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    //check token validity
    const { sub } = verify(
      token,
      "8e93b3516b0fdffd2f5f446b52a6a8c4"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

  //recover user informations
}
